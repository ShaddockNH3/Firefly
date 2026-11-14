#!/usr/bin/env node
/**
 * 从 Venera 的本地收藏库导出漫画清单，并在导出时就地加密。
 *
 * 设计前提：仓库是公开的，所以**明文标题不能落到任何被 git 跟踪的文件里**。
 * 这个脚本读 SQLite、过滤、转成 JSON，然后立刻用 AES-256-GCM 加密，
 * 只把密文写进仓库；密码从环境变量读，不落盘。
 *
 * 用法：
 *   MANGA_PW='你的密码' node scripts/export-manga.mjs
 *   MANGA_PW=... node scripts/export-manga.mjs --db /path/to/local_favorite.db --out src/data/manga/adult.enc.json
 *
 * 每次在 Venera 里增删收藏后重跑一次即可。
 */

import { execFileSync } from "node:child_process";
import { createCipheriv, createHmac, pbkdf2Sync } from "node:crypto";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";

// ---------- 参数 ----------
const args = process.argv.slice(2);
const pick = (name, fallback) => {
	const i = args.indexOf(`--${name}`);
	return i >= 0 && args[i + 1] ? args[i + 1] : fallback;
};

const DEFAULT_DB = `${process.env.HOME}/Library/Containers/com.github.wgh136.venera/Data/Library/Application Support/com.github.wgh136.venera/local_favorite.db`;
const DB = resolve(pick("db", DEFAULT_DB));
const OUT = resolve(pick("out", "src/data/manga/adult.enc.json"));
const SLUG = pick("slug", "manga-adult");
const PASSWORD = process.env.MANGA_PW;

// 整类不导出的收藏夹。新增排除项直接往里加。
const EXCLUDE_FOLDERS = new Set([""]);

if (!PASSWORD) {
	console.error("[x] 缺少 MANGA_PW 环境变量。密码只从环境变量读，不写进仓库。");
	process.exit(1);
}
if (!existsSync(DB)) {
	console.error(`[x] 找不到数据库：${DB}`);
	process.exit(1);
}

// ---------- 读库 ----------
function listTables() {
	const out = execFileSync("sqlite3", ["-readonly", DB, ".tables"], {
		encoding: "utf8",
	});
	return out
		.split(/\s+/)
		.map((s) => s.trim())
		.filter((s) => s && s !== "folder_order" && s !== "folder_sync");
}

function rowsOf(table) {
	const sql = `select id, name, author, tags, time, cover_path from "${table}";`;
	const out = execFileSync("sqlite3", ["-readonly", "-json", DB, sql], {
		encoding: "utf8",
		maxBuffer: 32 * 1024 * 1024,
	});
	return out.trim() ? JSON.parse(out) : [];
}

// [社团](C106)[作者]标题(作品)[翻译] → 取最长的括号外片段当展示名
function cleanTitle(raw) {
	const s = String(raw ?? "").trim();
	const parts = s
		.split(/\[[^\]]*\]|\([^)]*\)|【[^】]*】/g)
		.map((x) => x.trim())
		.filter((x) => x.length >= 2);
	if (!parts.length) return s;
	const best = parts.sort((a, b) => b.length - a.length)[0];
	return best.replace(/^[&+\-–—·・\s]+|[&+\-–—·・\s]+$/g, "").slice(0, 80);
}

function yearOf(time) {
	const m = /^(\d{4})/.exec(String(time ?? ""));
	return m ? m[1] : "";
}

// ---------- 组装 ----------
const folders = listTables().filter((t) => !EXCLUDE_FOLDERS.has(t));
const items = [];
const skipped = [];

for (const folder of folders) {
	let rows;
	try {
		rows = rowsOf(folder);
	} catch (e) {
		skipped.push(`${folder}（读取失败：${e.message}）`);
		continue;
	}
	for (const r of rows) {
		const title = cleanTitle(r.name);
		if (!title) continue;
		items.push({
			k: r.id, // 条目 id，笔记按它对
			t: title, // 展示名
			s: String(r.author ?? "")
				.trim()
				.slice(0, 40), // 社团 / 作者
			f: folder, // 收藏夹（页面上当分类用）
			y: yearOf(r.time), // 收录年
			c: String(r.cover_path ?? "").trim(), // 封面地址，锁着时不可见
		});
	}
}

// 同名去重（不同汉化组版本），保留先出现的
const seen = new Set();
const unique = items.filter((x) => {
	const k = `${x.t}|${x.s}|${x.f}`;
	if (seen.has(k)) return false;
	seen.add(k);
	return true;
});

unique.sort(
	(a, b) =>
		(b.y || "").localeCompare(a.y || "") || a.t.localeCompare(b.t, "zh"),
);

// ---------- 笔记 ----------
// 想给某本写评价，就在 scripts/manga-notes.local.json 里加一条：
//   { "1234567": { "sc": 8, "nt": "随便写" } }
// 这个文件被 gitignore 掉，只在本机存在，导出时会一起进密文。
const NOTES = resolve("scripts/manga-notes.local.json");
let notes = {};
if (existsSync(NOTES)) {
	try {
		notes = JSON.parse(readFileSync(NOTES, "utf8"));
	} catch (e) {
		console.warn(`[!] 笔记文件解析失败，忽略：${e.message}`);
	}
}
let notedCount = 0;
const usedIds = new Set();

// 每次导出都是全量重建：Venera 里改过的标题、社团、封面会跟着更新，删掉的书会消失。
// 笔记按条目 id 匹配，所以只要 id 不变就一直挂着。
for (const x of unique) {
	const n = notes[String(x.k)];
	if (!n) continue;
	if (Number.isFinite(n.sc)) x.sc = n.sc;
	if (n.nt) x.nt = String(n.nt).slice(0, 2000);
	if (x.sc !== undefined || x.nt) notedCount += 1;
	usedIds.add(String(x.k));
}

// 笔记里有、这批导出却找不到对应条目的 id：多半是书被删了，或者 id 抄错。
// 不报的话这些笔记会安静地丢掉，所以每次列出来。
const orphanNotes = Object.keys(notes).filter(
	(k) => !k.startsWith("_") && !usedIds.has(k),
);

// ---------- 加密 ----------
// 与 src/utils/crypto-utils.ts 保持一致：base64(salt16 + iv12 + tag16 + ciphertext)
const PBKDF2_ITERATIONS = 100000;
const derive = (key, context, len) =>
	createHmac("sha256", key).update(context).digest().subarray(0, len);

const plain = JSON.stringify({
	v: 1,
	generated: new Date().toISOString().slice(0, 10),
	items: unique,
});
const salt = derive(PASSWORD, `salt:${SLUG}`, 16);
const iv = derive(PASSWORD, `iv:${SLUG}`, 12);
const key = pbkdf2Sync(PASSWORD, salt, PBKDF2_ITERATIONS, 32, "sha256");
const cipher = createCipheriv("aes-256-gcm", key, iv);
const body = Buffer.concat([cipher.update(plain, "utf8"), cipher.final()]);
const payload = Buffer.concat([salt, iv, cipher.getAuthTag(), body]).toString(
	"base64",
);

const output = {
	v: 1,
	slug: SLUG,
	count: unique.length,
	// 只留密文。明文既没写文件，也没进 git。
	data: payload,
};

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, `${JSON.stringify(output, null, "\t")}\n`);

// ---------- 报告 ----------
const perFolder = new Map();
for (const x of unique) perFolder.set(x.f, (perFolder.get(x.f) ?? 0) + 1);

console.log(
	`[✓] 导出 ${unique.length} 条（原始 ${items.length}，去重 ${items.length - unique.length}）`,
);
console.log(`[✓] 排除的收藏夹：${[...EXCLUDE_FOLDERS].join("、")}`);
console.log(
	`[·] 分布：${[...perFolder.entries()].map(([k, v]) => `${k} ${v}`).join(" · ")}`,
);
if (skipped.length) console.log(`[!] 跳过：${skipped.join("；")}`);
const withCover = unique.filter((x) => x.c).length;
console.log(
	`[·] 带封面 ${withCover}/${unique.length}${notedCount ? `，带笔记 ${notedCount}` : ""}`,
);
if (orphanNotes.length) {
	console.log(
		`[!] ${orphanNotes.length} 条笔记没有对应条目（书可能已删或 id 写错）：${orphanNotes.slice(0, 5).join("、")}${orphanNotes.length > 5 ? " …" : ""}`,
	);
}
console.log(`[✓] 密文写入 ${OUT}（${payload.length} 字符）`);
