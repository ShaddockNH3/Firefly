#!/usr/bin/env node
/**
 * 腾讯文档（导出为 docx）与本仓库 markdown 的差异报告。
 *
 * 用途：腾讯文档是内容源头，markdown 是手工排版过的派生物。
 * 本脚本不修改任何文件，只输出「文档改了哪里、站点哪里还没跟上」的报告。
 *
 * 比对粒度是「句」而不是「段」：markdown 里合并/拆分段落不会产生误报。
 *
 * 用法：
 *   npx tsx scripts/docx-sync-report.ts
 *   npx tsx scripts/docx-sync-report.ts --docx=a.docx --md=b.md --out=report.md
 *   npx tsx scripts/docx-sync-report.ts --from=前言 --strict
 */

import { existsSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { inflateRawSync } from "node:zlib";

/* ---------------------------------- CLI ---------------------------------- */

type Options = {
	docx: string;
	md: string;
	from: string | null;
	out: string | null;
	strict: boolean;
	threshold: number;
	baseline: string | null;
	accept: boolean;
};

function parseArgs(argv: string[]): Options {
	const opts: Options = {
		docx: "",
		md: "src/content/posts/FZU/overview/index.md",
		from: "前言",
		out: null,
		strict: false,
		threshold: 0.6,
		baseline: null,
		accept: false,
	};

	for (const arg of argv) {
		if (arg.startsWith("--docx=")) opts.docx = arg.slice(7);
		else if (arg.startsWith("--md=")) opts.md = arg.slice(5);
		else if (arg.startsWith("--from=")) opts.from = arg.slice(7) || null;
		else if (arg.startsWith("--out=")) opts.out = arg.slice(6);
		else if (arg === "--strict") opts.strict = true;
		else if (arg === "--accept") opts.accept = true;
		else if (arg.startsWith("--baseline=")) opts.baseline = arg.slice(11);
		else if (arg.startsWith("--threshold="))
			opts.threshold = Number(arg.slice(12));
		else if (arg === "--help" || arg === "-h") {
			console.log(
				[
					"用法: npx tsx scripts/docx-sync-report.ts [选项]",
					"  --docx=路径       导出的 docx（默认取 md 同目录下的 docx）",
					"  --md=路径         站点的 markdown",
					"  --from=标题       从该标题之后开始比对（默认「前言」）",
					"  --out=文件        报告写入文件，默认打印到终端",
					"  --threshold=0.6   句子相似度达到多少算「修改」",
					"  --baseline=文件   已确认差异的基线文件",
					"  --accept          把当前差异写入基线（人工确认后使用）",
					"  --strict          有差异时以非零码退出",
				].join("\n"),
			);
			process.exit(0);
		}
	}

	opts.md = resolve(opts.md);
	if (!opts.docx) {
		const dirs = [dirname(opts.md), resolve("src/content/posts/FZU/overview")];
		const hit = dirs
			.map((dir) =>
				existsSync(dir)
					? readdirSync(dir).filter((f) => f.toLowerCase().endsWith(".docx"))
					: [],
			)
			.find((list) => list.length > 0);
		if (!hit)
			throw new Error(
				"未找到 docx：请用 --docx 指定，或放在 markdown 同目录下",
			);
		opts.docx = join(dirs[0], hit[0]);
		if (!existsSync(opts.docx)) opts.docx = join(dirs[1], hit[0]);
	}
	opts.docx = resolve(opts.docx);
	return opts;
}

/* ------------------------------- ZIP / DOCX ------------------------------ */

function findEocd(buf: Buffer): number {
	const min = Math.max(0, buf.length - 66_000);
	for (let i = buf.length - 22; i >= min; i--) {
		if (buf.readUInt32LE(i) === 0x0605_4b50) return i;
	}
	throw new Error("不是有效的 docx：找不到 ZIP 目录结尾");
}

function readZipEntries(buf: Buffer, targets: string[]): Map<string, Buffer> {
	const eocd = findEocd(buf);
	const count = buf.readUInt16LE(eocd + 10);
	let offset = buf.readUInt32LE(eocd + 16);
	const out = new Map<string, Buffer>();

	for (let i = 0; i < count; i++) {
		if (buf.readUInt32LE(offset) !== 0x0201_4b50) {
			throw new Error("不是有效的 docx：目录项损坏");
		}
		const method = buf.readUInt16LE(offset + 10);
		const compressedSize = buf.readUInt32LE(offset + 20);
		const nameLen = buf.readUInt16LE(offset + 28);
		const extraLen = buf.readUInt16LE(offset + 30);
		const commentLen = buf.readUInt16LE(offset + 32);
		const localOffset = buf.readUInt32LE(offset + 42);
		const name = buf
			.subarray(offset + 46, offset + 46 + nameLen)
			.toString("utf8");

		if (targets.includes(name)) {
			const localNameLen = buf.readUInt16LE(localOffset + 26);
			const localExtraLen = buf.readUInt16LE(localOffset + 28);
			const start = localOffset + 30 + localNameLen + localExtraLen;
			const data = buf.subarray(start, start + compressedSize);
			out.set(name, method === 0 ? Buffer.from(data) : inflateRawSync(data));
		}
		offset += 46 + nameLen + extraLen + commentLen;
	}

	for (const target of targets) {
		if (!out.has(target)) throw new Error(`docx 中找不到 ${target}`);
	}
	return out;
}

const ENTITY: Record<string, string> = {
	"&amp;": "&",
	"&lt;": "<",
	"&gt;": ">",
	"&quot;": '"',
	"&apos;": "'",
};

function decodeXml(text: string): string {
	return text
		.replace(/&(amp|lt|gt|quot|apos);/g, (m) => ENTITY[m] ?? m)
		.replace(/&#x([0-9a-fA-F]+);/g, (_, hex: string) =>
			String.fromCodePoint(Number.parseInt(hex, 16)),
		)
		.replace(/&#(\d+);/g, (_, dec: string) =>
			String.fromCodePoint(Number(dec)),
		);
}

function readAttr(token: string, name: string): string | null {
	const m = new RegExp(`${name}\\s*=\\s*"([^"]*)"`).exec(token);
	return m ? m[1] : null;
}

function tokenize(xml: string): string[] {
	return xml.match(/<[^>]*>|[^<]+/g) ?? [];
}

/** 读取 styles.xml，建立「段落样式 → 大纲级别」映射（模块/附录的级别定义在这里）。 */
function parseStyleOutline(stylesXml: string): Map<string, number> {
	const map = new Map<string, number>();
	let styleId: string | null = null;
	let outline: number | null = null;

	for (const token of tokenize(stylesXml)) {
		if (!token.startsWith("<")) continue;
		if (/^<w:style[\s>]/.test(token)) {
			styleId = readAttr(token, "w:styleId");
			outline = null;
			continue;
		}
		if (token.startsWith("<w:outlineLvl") && styleId) {
			const val = readAttr(token, "w:val");
			if (val !== null) outline = Number(val);
			continue;
		}
		if (token === "</w:style>") {
			if (styleId && outline !== null && outline >= 0 && outline <= 8)
				map.set(styleId, outline);
			styleId = null;
			outline = null;
		}
	}
	return map;
}

type RawBlock =
	| { kind: "para"; text: string; isHeading: boolean }
	| { kind: "row"; text: string };

type ParsedDocx = { blocks: RawBlock[]; images: number };

function parseDocxXml(
	xml: string,
	styleOutline: Map<string, number>,
): ParsedDocx {
	const blocks: RawBlock[] = [];
	const tokens = tokenize(xml);

	let inText = false;
	let inDeleted = 0;
	let inField = 0;
	let images = 0;
	let para: { parts: string[]; style: string | null } | null = null;
	let cell: string[] | null = null;
	let cellMerge = false;
	let row: { text: string; merge: boolean }[] | null = null;
	let lastRow: string[] = [];

	for (const token of tokens) {
		if (!token.startsWith("<")) {
			if (inText && para && inDeleted === 0 && inField === 0)
				para.parts.push(decodeXml(token));
			continue;
		}
		if (token.startsWith("<?") || token.startsWith("<!")) continue;

		const closing = token.startsWith("</");
		const nameMatch = /^<\/?([^\s/>]+)/.exec(token);
		if (!nameMatch) continue;
		const name = nameMatch[1];
		const selfClosing = token.endsWith("/>");

		switch (name) {
			case "w:p":
				if (closing) {
					if (para) {
						const text = para.parts.join("").trim();
						const style = para.style ? styleOutline.get(para.style) : undefined;
						const isHeading = style !== undefined;
						if (cell) {
							if (text) cell.push(text);
						} else if (text) {
							blocks.push({ kind: "para", text, isHeading });
						}
						para = null;
					}
				} else if (!selfClosing) {
					para = { parts: [], style: null };
				}
				break;
			case "w:pStyle":
				if (para && !closing) para.style = readAttr(token, "w:val");
				break;
			case "w:drawing":
				if (!closing && !selfClosing) images++;
				break;
			case "w:t":
				inText = !closing && !selfClosing;
				break;
			case "w:instrText":
				inField += closing ? -1 : selfClosing ? 0 : 1;
				break;
			case "w:del":
				inDeleted += closing ? -1 : selfClosing ? 0 : 1;
				break;
			case "w:vMerge":
				// val="restart" 是合并起点，缺省表示延续上一行的值
				if (!closing && cell)
					cellMerge = readAttr(token, "w:val") !== "restart";
				break;
			case "w:tc":
				if (closing) {
					if (cell) {
						if (row)
							row.push({ text: cell.join(" ").trim(), merge: cellMerge });
						cell = null;
						cellMerge = false;
					}
				} else if (!selfClosing) {
					cell = [];
					cellMerge = false;
				}
				break;
			case "w:tbl":
				if (!closing && !selfClosing) lastRow = [];
				break;
			case "w:tr":
				if (closing) {
					if (row) {
						const values = row.map((c, i) =>
							c.merge ? (lastRow[i] ?? "") : c.text,
						);
						lastRow = values;
						const text = values.filter(Boolean).join("|");
						if (text) blocks.push({ kind: "row", text });
						row = null;
					}
				} else if (!selfClosing) {
					row = [];
				}
				break;
			default:
				break;
		}
	}

	return { blocks, images };
}

/* --------------------------------- MARKDOWN ------------------------------- */

type MdBlock = { kind: "heading" | "para" | "row"; text: string };

type ParsedMd = { blocks: MdBlock[]; images: number };

const LIST_MARKER = /^(?:[-*+]|\d+\.)\s+(?:\[[ xX]\]\s+)?/;

function stripInline(text: string): string {
	return text
		.replace(/!\[[^\]]*\]\([^)]*\)/g, "")
		.replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
		.replace(/<((?:https?|mailto):[^>]+)>/g, "$1")
		.replace(/\*\*|__|~~|`/g, "")
		.replace(/<\/?[a-zA-Z][^>]*>/g, "")
		.replace(/\s*\{#[^}]*\}\s*$/, "")
		.trim();
}

function parseMarkdown(md: string, fromHeading: string | null): ParsedMd {
	const blocks: MdBlock[] = [];
	const lines = md.split(/\r?\n/);

	let i = 0;
	if (lines[0]?.trim() === "---") {
		i = 1;
		while (i < lines.length && lines[i].trim() !== "---") i++;
		i++;
	}

	let started = fromHeading === null;
	let inHtml = false;
	let paragraph: string[] = [];
	let images = 0;

	const flush = () => {
		if (paragraph.length > 0) {
			const text = stripInline(paragraph.join(" "));
			if (text) blocks.push({ kind: "para", text });
		}
		paragraph = [];
	};

	for (; i < lines.length; i++) {
		const line = (lines[i] ?? "").trim();

		if (inHtml) {
			if (line.startsWith("</div>")) inHtml = false;
			continue;
		}
		if (line.startsWith("<div")) {
			inHtml = true;
			continue;
		}
		if (!line) {
			flush();
			continue;
		}

		const heading = /^(#{1,6})\s+(.*)$/.exec(line);
		if (heading) {
			flush();
			const text = stripInline(heading[2]);
			if (!started) {
				if (fromHeading && text.includes(fromHeading)) started = true;
				continue;
			}
			blocks.push({ kind: "heading", text });
			continue;
		}

		if (!started) continue;
		if (line.startsWith("<!--")) continue;

		if (/^!\[[^\]]*\]\([^)]*\)$/.test(line)) {
			images++;
			flush();
			continue;
		}

		if (/^\|?\s*:?-{2,}:?\s*(\|\s*:?-{2,}:?\s*)*\|?$/.test(line)) continue;

		if (line.startsWith("|")) {
			flush();
			const cells = line
				.split("|")
				.slice(1, -1)
				.map((c) => stripInline(c))
				.filter(Boolean);
			if (cells.length > 0) blocks.push({ kind: "row", text: cells.join("|") });
			continue;
		}

		if (line.startsWith(">")) {
			flush();
			const body = stripInline(line.replace(/^>\s?/, ""));
			if (!body || /^\[!\w+\]/.test(body)) continue;
			blocks.push({ kind: "para", text: body });
			continue;
		}

		if (LIST_MARKER.test(line)) {
			flush();
			const body = stripInline(line.replace(LIST_MARKER, ""));
			if (body) blocks.push({ kind: "para", text: body });
			continue;
		}

		paragraph.push(line);
	}
	flush();

	return { blocks, images };
}

/* ---------------------------------- 归一化 -------------------------------- */

const PUNCT =
	/[\s，。、；：？！""''（）《》〈〉【】「」『』…—－·~,.;:?!/\\|()[\]{}<>'"`@#$%^&*+=_–-]/g;

const BULLET = /[●○■□▪▫◆◇・•]/g;

function normalize(text: string): string {
	return text
		.replace(BULLET, "")
		.replace(/[①-⑳㉑-㉟]/g, "")
		.normalize("NFKC")
		.replace(/^\d+[.、)]/, "")
		.replace(PUNCT, "")
		.replace(/[A-Z]/g, (c) => c.toLowerCase());
}

/* ----------------------------------- DIFF -------------------------------- */

type Unit = {
	text: string;
	norm: string;
	/** 去掉开头「标签：」后的归一化文本，用于容忍加粗小标题的写法差异 */
	normLoose: string;
	section: string;
	kind: "heading" | "sentence" | "row";
	source: "docx" | "md";
};

function splitSentences(text: string): string[] {
	return text
		.split(/(?<=[。！？!?；;])/)
		.flatMap((s) => s.split("\n"))
		.map((s) => s.trim())
		.filter(Boolean);
}

function stripLabel(text: string): string {
	// URL 里的 "https:" 不是标签，别剥
	if (/^https?:\/\//i.test(text)) return text;
	return text.replace(/^[^：:]{1,12}[：:]/, "");
}

function toUnits(
	blocks: RawBlock[] | MdBlock[],
	source: "docx" | "md",
): Unit[] {
	const units: Unit[] = [];
	let section = "";

	const push = (text: string, kind: Unit["kind"]) => {
		const norm = normalize(text);
		if (norm.length < 2) return;
		units.push({
			text,
			norm,
			normLoose: normalize(stripLabel(text)),
			section,
			kind,
			source,
		});
	};

	for (const block of blocks) {
		const isHeading =
			"isHeading" in block ? block.isHeading : block.kind === "heading";
		const text = block.text.trim();
		if (!text) continue;

		if (block.kind === "row") {
			push(text, "row");
			continue;
		}
		if (isHeading) section = text;
		// Q 条目在文档里是加粗段落、在 markdown 里是标题，统一按句处理
		for (const sentence of splitSentences(text))
			push(sentence, isHeading ? "heading" : "sentence");
	}
	return units;
}

/** 跳过起始标记（含）之前的内容，用于对齐「站点外壳」与「文档标题/前言标签」。 */
function trimBefore<T extends { text: string }>(
	blocks: T[],
	marker: string | null,
): T[] {
	if (!marker) return blocks;
	const index = blocks.findIndex((b) =>
		normalize(b.text).includes(normalize(marker)),
	);
	return index < 0 ? blocks : blocks.slice(index + 1);
}

function bigrams(s: string): Set<string> {
	const set = new Set<string>();
	if (s.length < 2) {
		if (s) set.add(s);
		return set;
	}
	for (let i = 0; i < s.length - 1; i++) set.add(s.slice(i, i + 2));
	return set;
}

function dice(a: string, b: string): number {
	if (a === b) return 1;
	if (!a || !b) return 0;
	const A = bigrams(a);
	const B = bigrams(b);
	if (A.size === 0 || B.size === 0) return 0;
	let hit = 0;
	for (const g of A) if (B.has(g)) hit++;
	return (2 * hit) / (A.size + B.size);
}

type Change =
	| { type: "changed"; docx: Unit; md: Unit; sim: number }
	| { type: "added"; docx: Unit }
	| { type: "removed"; md: Unit };

function diffUnits(
	docxUnits: Unit[],
	mdUnits: Unit[],
	threshold: number,
): { changes: Change[]; equivalent: number } {
	const mdPool = mdUnits.map((u) => ({ u, used: false }));
	const byNorm = new Map<string, typeof mdPool>();
	const byLoose = new Map<string, typeof mdPool>();
	for (const item of mdPool) {
		for (const [map, key] of [
			[byNorm, item.u.norm],
			[byLoose, item.u.normLoose],
		] as const) {
			const list = map.get(key);
			if (list) list.push(item);
			else map.set(key, [item]);
		}
	}

	// 第一轮：完全一致
	const unmatchedDocx: Unit[] = [];
	for (const unit of docxUnits) {
		const hit = byNorm.get(unit.norm)?.find((c) => !c.used);
		if (hit) hit.used = true;
		else unmatchedDocx.push(unit);
	}

	// 第二轮：容忍「加粗小标题：」这类标签写法差异
	let equivalent = 0;
	const candidatesLeft: Unit[] = [];
	for (const unit of unmatchedDocx) {
		const hit = byLoose.get(unit.normLoose)?.find((c) => !c.used);
		if (hit) {
			hit.used = true;
			equivalent++;
		} else {
			candidatesLeft.push(unit);
		}
	}

	// 第三轮：相似度配对，识别「改了几处字」
	const remainingMd = mdPool.filter((m) => !m.used);
	const changes: Change[] = [];

	for (const docxUnit of candidatesLeft) {
		let best: (typeof remainingMd)[number] | null = null;
		let bestSim = 0;
		for (const candidate of remainingMd) {
			if (candidate.used) continue;
			const sim = dice(docxUnit.norm, candidate.u.norm);
			if (sim > bestSim) {
				bestSim = sim;
				best = candidate;
			}
		}
		if (best && bestSim >= threshold) {
			best.used = true;
			changes.push({
				type: "changed",
				docx: docxUnit,
				md: best.u,
				sim: bestSim,
			});
		} else {
			changes.push({ type: "added", docx: docxUnit });
		}
	}

	for (const candidate of remainingMd) {
		if (!candidate.used) changes.push({ type: "removed", md: candidate.u });
	}

	return { changes, equivalent };
}

/* --------------------------------- 数字 / 链接 ----------------------------- */

function numbersOf(units: Unit[]): Set<string> {
	const set = new Set<string>();
	for (const unit of units) {
		// 去掉手打的行首序号（如 "1.24级..."），避免被当成小数
		const text = unit.text.replace(/^\d+[.、)）]\s*/, "");
		for (const m of text.matchAll(/\d+(?:\.\d+)?%?/g)) set.add(m[0]);
	}
	return set;
}

function urlsOf(text: string): Set<string> {
	const set = new Set<string>();
	for (const m of text.matchAll(/https?:\/\/[^\s)\]}>）】"]+/g)) {
		set.add(m[0].replace(/[.,;:!?、。，；：！？]+$/, ""));
	}
	return set;
}

function setDiff(a: Set<string>, b: Set<string>): string[] {
	return [...a].filter((x) => !b.has(x));
}

/* ---------------------------------- 报告 ---------------------------------- */

function clip(text: string, max = 200): string {
	const flat = text.replace(/\s+/g, " ").trim();
	return flat.length > max ? `${flat.slice(0, max)}…` : flat;
}

function buildReport(
	opts: Options,
	docx: ParsedDocx,
	md: ParsedMd,
	docxUnits: Unit[],
	mdUnits: Unit[],
	changes: Change[],
	equivalent: number,
	suppressed = 0,
): { report: string; differences: number } {
	const changed = changes.filter(
		(c): c is Extract<Change, { type: "changed" }> => c.type === "changed",
	);
	const added = changes.filter(
		(c): c is Extract<Change, { type: "added" }> => c.type === "added",
	);
	const removed = changes.filter(
		(c): c is Extract<Change, { type: "removed" }> => c.type === "removed",
	);

	const docxText = docxUnits.map((u) => u.text).join("\n");
	const mdText = mdUnits.map((u) => u.text).join("\n");

	const numDiffDocx = setDiff(numbersOf(docxUnits), numbersOf(mdUnits));
	const numDiffMd = setDiff(numbersOf(mdUnits), numbersOf(docxUnits));
	const urlDiffDocx = setDiff(urlsOf(docxText), urlsOf(mdText));
	const urlDiffMd = setDiff(urlsOf(mdText), urlsOf(docxText));

	const lines: string[] = [];
	lines.push("# 腾讯文档 → 站点 同步报告");
	lines.push("");
	lines.push(`- 文档（docx）：\`${opts.docx}\``);
	lines.push(`- 站点（markdown）：\`${opts.md}\``);
	lines.push(`- 起始标记：\`${opts.from ?? "（全文）"}\``);
	lines.push("");
	lines.push("## 概览");
	lines.push("");
	lines.push("| 项目 | 文档 | 站点 |");
	lines.push("| --- | --- | --- |");
	lines.push(
		`| 大纲标题 | ${docxUnits.filter((u) => u.kind === "heading").length} | ${mdUnits.filter((u) => u.kind === "heading").length} |`,
	);
	lines.push(
		`| 句子 | ${docxUnits.filter((u) => u.kind === "sentence").length} | ${mdUnits.filter((u) => u.kind === "sentence").length} |`,
	);
	lines.push(
		`| 表格行 | ${docxUnits.filter((u) => u.kind === "row").length} | ${mdUnits.filter((u) => u.kind === "row").length} |`,
	);
	lines.push(`| 图片 | ${docx.images} | ${md.images} |`);
	lines.push("");
	lines.push(`- 修改（高度相似）：**${changed.length}**`);
	lines.push(`- 新增（文档有、站点无）：**${added.length}**`);
	lines.push(`- 缺失（站点有、文档无）：**${removed.length}**`);
	lines.push(`- 数字差异：**${numDiffDocx.length + numDiffMd.length}**`);
	lines.push(`- 链接差异：**${urlDiffDocx.length + urlDiffMd.length}**`);
	lines.push(`- 等价（仅标签/格式差异，已忽略）：${equivalent}`);
	lines.push(`- 已按基线忽略：${suppressed}`);
	lines.push("");
	lines.push(
		"> 文档里只有模块/附录使用大纲级别，Q 条目在文档中是普通段落，因此两侧「大纲标题」数天然不等，不影响比对。",
	);
	lines.push("");

	if (changed.length > 0) {
		lines.push("## 修改");
		lines.push("");
		changed.forEach((item, i) => {
			lines.push(`### ${i + 1}. 相似度 ${item.sim.toFixed(2)}`);
			lines.push("");
			lines.push(`- 章节（文档）：${item.docx.section || "（无）"}`);
			lines.push(`- 章节（站点）：${item.md.section || "（无）"}`);
			lines.push("");
			lines.push(`文档：${clip(item.docx.text)}`);
			lines.push("");
			lines.push(`站点：${clip(item.md.text)}`);
			lines.push("");
		});
	}

	if (added.length > 0) {
		lines.push("## 新增（文档有、站点无）");
		lines.push("");
		for (const item of added) {
			lines.push(
				`- **${item.docx.section || "（无章节）"}**：${clip(item.docx.text)}`,
			);
		}
		lines.push("");
	}

	if (removed.length > 0) {
		lines.push("## 缺失（站点有、文档无）");
		lines.push("");
		for (const item of removed) {
			lines.push(
				`- **${item.md.section || "（无章节）"}**：${clip(item.md.text)}`,
			);
		}
		lines.push("");
	}

	if (numDiffDocx.length > 0 || numDiffMd.length > 0) {
		lines.push("## 数字差异");
		lines.push("");
		if (numDiffDocx.length > 0)
			lines.push(`文档有、站点无：\`${numDiffDocx.slice(0, 60).join("` `")}\``);
		if (numDiffDocx.length > 0 && numDiffMd.length > 0) lines.push("");
		if (numDiffMd.length > 0)
			lines.push(`站点有、文档无：\`${numDiffMd.slice(0, 60).join("` `")}\``);
		lines.push("");
	}

	if (urlDiffDocx.length > 0 || urlDiffMd.length > 0) {
		lines.push("## 链接差异");
		lines.push("");
		for (const url of urlDiffDocx) lines.push(`- 文档有、站点无：${url}`);
		for (const url of urlDiffMd) lines.push(`- 站点有、文档无：${url}`);
		lines.push("");
	}

	if (
		changes.length === 0 &&
		numDiffDocx.length === 0 &&
		numDiffMd.length === 0
	) {
		lines.push("✅ 未发现内容差异。");
		lines.push("");
	}

	const differences =
		changes.length +
		numDiffDocx.length +
		numDiffMd.length +
		urlDiffDocx.length +
		urlDiffMd.length;
	return { report: lines.join("\n"), differences };
}

/* --------------------------------- 基线 ---------------------------------- */

type Baseline = { docxOnly: string[]; mdOnly: string[] };

function baselineFile(opts: Options): string {
	return opts.baseline
		? resolve(opts.baseline)
		: join(dirname(opts.md), ".docx-sync-baseline.json");
}

function loadBaseline(path: string): Baseline {
	if (!existsSync(path)) return { docxOnly: [], mdOnly: [] };
	try {
		const data = JSON.parse(readFileSync(path, "utf8")) as Partial<Baseline>;
		return { docxOnly: data.docxOnly ?? [], mdOnly: data.mdOnly ?? [] };
	} catch {
		return { docxOnly: [], mdOnly: [] };
	}
}

function saveBaseline(path: string, baseline: Baseline): void {
	const uniq = (list: string[]) => [...new Set(list)].sort();
	const body = JSON.stringify(
		{ docxOnly: uniq(baseline.docxOnly), mdOnly: uniq(baseline.mdOnly) },
		null,
		"\t",
	);
	writeFileSync(path, `${body}\n`, "utf8");
}

function isAccepted(change: Change, baseline: Baseline): boolean {
	const docxSet = new Set(baseline.docxOnly);
	const mdSet = new Set(baseline.mdOnly);
	if (change.type === "added") return docxSet.has(change.docx.norm);
	if (change.type === "removed") return mdSet.has(change.md.norm);
	return docxSet.has(change.docx.norm) && mdSet.has(change.md.norm);
}

/* ---------------------------------- main --------------------------------- */

function main() {
	const opts = parseArgs(process.argv.slice(2));

	const zip = readZipEntries(readFileSync(opts.docx), [
		"word/document.xml",
		"word/styles.xml",
	]);
	const styleOutline = parseStyleOutline(
		(zip.get("word/styles.xml") ?? Buffer.alloc(0)).toString("utf8"),
	);
	const parsedDocx = parseDocxXml(
		(zip.get("word/document.xml") ?? Buffer.alloc(0)).toString("utf8"),
		styleOutline,
	);

	const parsedMd = parseMarkdown(readFileSync(opts.md, "utf8"), opts.from);

	const docxUnits = toUnits(trimBefore(parsedDocx.blocks, opts.from), "docx");
	const mdUnits = toUnits(parsedMd.blocks, "md");
	const { changes, equivalent } = diffUnits(docxUnits, mdUnits, opts.threshold);

	const path = baselineFile(opts);
	const baseline = loadBaseline(path);

	if (opts.accept) {
		for (const change of changes) {
			if (change.type === "added") baseline.docxOnly.push(change.docx.norm);
			else if (change.type === "removed") baseline.mdOnly.push(change.md.norm);
			else {
				baseline.docxOnly.push(change.docx.norm);
				baseline.mdOnly.push(change.md.norm);
			}
		}
		saveBaseline(path, baseline);
		console.log(`已把 ${changes.length} 条差异写入基线：${path}`);
	}

	const kept = changes.filter((c) => !isAccepted(c, baseline));
	const suppressed = changes.length - kept.length;

	const { report, differences } = buildReport(
		opts,
		parsedDocx,
		parsedMd,
		docxUnits,
		mdUnits,
		kept,
		equivalent,
		suppressed,
	);

	if (opts.out) {
		writeFileSync(opts.out, report, "utf8");
		console.log(`报告已写入 ${opts.out}（${differences} 处差异）`);
	} else {
		console.log(report);
	}

	if (opts.strict && differences > 0) process.exitCode = 1;
}

main();
