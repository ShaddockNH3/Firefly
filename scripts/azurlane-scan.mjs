#!/usr/bin/env node
/**
 * 从安卓模拟器（蓝叠 Air）里扫碧蓝航线「已有换装」列表，OCR 出全部皮肤名。
 *
 * 流程：adb 截图 → macOS Vision OCR → 与本地皮肤库匹配 → 向下慢滚 → 到画面不再变化为止。
 * 手指落在右侧空白列，全程不会被识别成点击卡片。
 *
 * 前置：
 *   adb connect 127.0.0.1:5555      （蓝叠 Air 要先开 ADB）
 *   模拟器停在 商店 → 已有换装 页面
 *
 * 用法：
 *   node scripts/azurlane-scan.mjs
 *   node scripts/azurlane-scan.mjs --step=140 --max=120
 *   node scripts/azurlane-scan.mjs --merge        （结果并进 mine.json 的 skins）
 *
 * 产物：
 *   scripts/.cache/azurlane-scan/NN.png        每屏截图
 *   scripts/.cache/azurlane-scan/result.json   三类结果：换装 / 改造立绘 / 没认出的文字
 *
 * 说明：商店列表里混着「XX·改」的改造立绘，皮肤库没收这类，所以单独归到 remodel，
 *      不并进 mine.json（页面上的换装墙只认换装库里的名字）。
 */

import { execFile, execFileSync } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import path from "node:path";
import { promisify } from "node:util";

const run = promisify(execFile);
const ROOT = path.resolve(import.meta.dirname, "..");
const SKINS = path.join(ROOT, "src", "data", "azurlane", "skins.json");
const MINE = path.join(ROOT, "src", "data", "azurlane", "mine.json");
const CACHE = path.join(ROOT, "scripts", ".cache", "azurlane-scan");
const OCR_SRC = path.join(ROOT, "scripts", "lib", "ocr-vision.swift");
const OCR_BIN = path.join(ROOT, "scripts", ".cache", "ocr-vision");

const argv = Object.fromEntries(
	process.argv.slice(2).map((a) => {
		const [k, v = "true"] = a.replace(/^--/, "").split("=");
		return [k, v];
	}),
);
const serial = argv.serial || "127.0.0.1:5555";
const step = Number(argv.step || 140);
const maxShots = Number(argv.max || 120);
const merge = argv.merge === "true";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const adb = (...args) => run("adb", ["-s", serial, ...args], { maxBuffer: 64 * 1024 * 1024 });

/** screencap 是二进制流，必须按 Buffer 收 */
function screencap(file) {
	const buf = execFileSync("adb", ["-s", serial, "exec-out", "screencap", "-p"], {
		maxBuffer: 64 * 1024 * 1024,
		encoding: "buffer",
	});
	writeFileSync(file, buf);
	return buf;
}

function ensureOcr() {
	const fresh = (p) => (existsSync(p) ? statSync(p).mtimeMs : 0);
	if (fresh(OCR_BIN) > fresh(OCR_SRC)) return;
	mkdirSync(path.dirname(OCR_BIN), { recursive: true });
	console.log("[scan] 编译 OCR（第一次要几秒）…");
	execFileSync("swiftc", ["-O", OCR_SRC, "-o", OCR_BIN], { stdio: "inherit" });
}

const ocr = (file) =>
	JSON.parse(execFileSync(OCR_BIN, [file], { maxBuffer: 32 * 1024 * 1024 }).toString());

/** 繁体 → 简体：字形识别偶尔会吐繁体，皮肤库里存的是简体 */
const T2S = new Map(
	Object.entries({
		葉: "叶", 龍: "龙", 麗: "丽", 亞: "亚", 島: "岛", 澤: "泽", 櫻: "樱", 鶴: "鹤", 戰: "战",
		鬥: "斗", 靈: "灵", 鳳: "凤", 華: "华", 國: "国", 學: "学", 樂: "乐", 園: "园", 緣: "缘",
		無: "无", 聖: "圣", 燈: "灯", 劍: "剑", 貓: "猫", 鳥: "鸟", 魚: "鱼", 騎: "骑", 鎧: "铠",
		獅: "狮", 艦: "舰", 隊: "队", 夢: "梦", 見: "见", 與: "与", 為: "为", 這: "这", 說: "说",
		隨: "随", 禮: "礼", 節: "节", 變: "变", 讓: "让", 請: "请", 誰: "谁", 謝: "谢", 賽: "赛",
		躍: "跃", 軍: "军", 轉: "转", 迴: "回", 紅: "红", 純: "纯", 絲: "丝", 織: "织", 絆: "绊",
		縛: "缚", 繪: "绘", 羅: "罗", 羈: "羁", 聞: "闻", 聲: "声", 聰: "聪", 腦: "脑", 艶: "艳",
		蘇: "苏", 蘭: "兰", 虛: "虚", 處: "处", 號: "号", 裝: "装", 裡: "里", 貝: "贝", 爾: "尔",
		獄: "狱", 獵: "猎", 獸: "兽", 獻: "献", 現: "现", 環: "环", 產: "产", 畫: "画", 異: "异",
		當: "当", 療: "疗", 發: "发", 盡: "尽", 監: "监", 盤: "盘", 眾: "众", 礙: "碍", 確: "确",
		礎: "础", 祕: "秘", 禍: "祸", 禪: "禅", 離: "离", 難: "难", 霧: "雾", 靜: "静", 響: "响",
		頁: "页", 頂: "顶", 順: "顺", 須: "须", 風: "风", 飛: "飞", 餅: "饼", 養: "养", 驅: "驱",
		驗: "验", 體: "体", 髮: "发", 麼: "么", 黃: "黄", 點: "点", 齒: "齿", 蕓: "云", 蹁: "翩",
		誼: "憩", 免: "兔", 埵: "睡", 愛: "爱", 筆: "应",
	}),
);

const STRIP = /[\s.．。·・…！!，,、:：;；"'“”‘’()（）[\]【】]/g;

function normalize(text) {
	let out = "";
	for (const ch of String(text).replace(STRIP, "")) out += T2S.get(ch) ?? ch;
	return out;
}

const skins = JSON.parse(readFileSync(SKINS, "utf8"));
const dict = skins.map((s) => ({ skin: s, key: normalize(s.n), grams: bigrams(normalize(s.n)) }));
const exact = new Map(dict.map((d) => [d.key, d.skin]));

/** 二元组 Dice 相似度，比编辑距离快，够用 */
function bigrams(s) {
	const m = new Map();
	for (let i = 0; i < s.length - 1; i++) {
		const g = s.slice(i, i + 2);
		m.set(g, (m.get(g) ?? 0) + 1);
	}
	return m;
}
function dice(a, b) {
	if (!a.size || !b.size) return 0;
	let hit = 0;
	for (const [g, n] of a) hit += Math.min(n, b.get(g) ?? 0);
	return (2 * hit) / (a.size + b.size);
}

const UI_NOISE = ["已有换装", "筛选", "点击搜索", "SHOP", "商店", "全部", "已拥有", "未拥有"];

/** 返回 { type: "skin"|"remodel", ... } */
function classify(text) {
	const key = normalize(text);
	if (key.length < 3) return null;

	// 「XX·改」是改造立绘，不在换装库里
	if (key.endsWith("改") && key.length >= 3) return { type: "remodel", name: key };

	const hit = exact.get(key);
	if (hit) return { type: "skin", skin: hit, how: "exact" };

	const prefixed = dict.filter((d) => d.key.startsWith(key));
	if (prefixed.length === 1) return { type: "skin", skin: prefixed[0].skin, how: "prefix" };
	if (prefixed.length > 1 && prefixed.every((d) => d.key.startsWith(key))) {
		return { type: "skin", skin: prefixed[0].skin, how: "prefix?", rivals: prefixed.length };
	}

	const grams = bigrams(key);
	let best = null;
	let second = null;
	for (const d of dict) {
		if (Math.abs(d.key.length - key.length) > 5) continue;
		const score = dice(d.grams, grams);
		if (!best || score > best.score) {
			second = best;
			best = { skin: d.skin, score };
		} else if (!second || score > second.score) {
			second = { skin: d.skin, score };
		}
	}
	if (best && best.score >= 0.62) {
		const margin = best.score - (second?.score ?? 0);
		return { type: "skin", skin: best.skin, how: `fuzzy${best.score.toFixed(2)}`, shaky: margin < 0.06 };
	}
	return null;
}

async function main() {
	ensureOcr();
	mkdirSync(CACHE, { recursive: true });

	const { stdout: state } = await adb("get-state");
	if (state.trim() !== "device") throw new Error(`设备 ${serial} 状态是 ${state.trim()}，先 adb connect`);
	const { stdout: sizeOut } = await adb("shell", "wm", "size");
	const [, W, H] = (sizeOut.match(/(\d+)x(\d+)/) || []).map(Number);
	console.log(`[scan] ${serial} ${W}x${H}，步长 ${step}px，最多 ${maxShots} 屏`);

	// 回到顶部，保证可重复
	for (let i = 0; i < 8; i++) {
		await adb("shell", "input", "swipe", `${W * 0.9 | 0}`, `${H * 0.25 | 0}`, `${W * 0.9 | 0}`, `${H * 0.85 | 0}`, "100");
		await sleep(180);
	}
	await sleep(1500);

	const found = new Map();
	const remodels = new Set();
	const unknown = new Map();
	let prevHash = "";
	let still = 0;

	for (let i = 0; i < maxShots; i++) {
		const file = path.join(CACHE, `${String(i).padStart(2, "0")}.png`);
		const buf = screencap(file);
		const hash = `${buf.length}:${buf.subarray(0, 96).toString("hex")}`;
		if (hash === prevHash) {
			if (++still >= 2) {
				console.log(`[scan] 第 ${i} 屏起画面不再变化，到底了`);
				break;
			}
		} else still = 0;
		prevHash = hash;

		for (const line of ocr(file)) {
			if (line.conf < 0.3) continue;
			const text = line.text.trim();
			if (!text || UI_NOISE.some((n) => text.includes(n))) continue;

			const hit = classify(text);
			if (hit?.type === "skin") {
				if (!found.has(hit.skin.n)) {
					found.set(hit.skin.n, { name: hit.skin.n, ship: hit.skin.s, kind: hit.skin.k, how: hit.how, shaky: !!hit.shaky });
					console.log(`  + ${hit.skin.n}（${hit.skin.s}）${hit.how === "exact" ? "" : " ← " + text}`);
				}
			} else if (hit?.type === "remodel") {
				remodels.add(hit.name);
			} else if (/[\u4e00-\u9fa5]/.test(text)) {
				unknown.set(text, (unknown.get(text) ?? 0) + 1);
			}
		}

		await adb("shell", "input", "swipe", `${W * 0.9 | 0}`, `${H * 0.84 | 0}`, `${W * 0.9 | 0}`, `${H * 0.84 - step | 0}`, "420");
		await sleep(1100);
	}

	const list = [...found.values()].sort((a, b) => a.name.localeCompare(b.name, "zh"));
	const result = {
		scannedAt: new Date().toISOString(),
		device: serial,
		total: list.length,
		skins: list,
		remodels: [...remodels].sort((a, b) => a.localeCompare(b, "zh")),
		unknown: [...unknown.keys()],
	};
	writeFileSync(path.join(CACHE, "result.json"), JSON.stringify(result, null, "\t"));

	const shaky = list.filter((s) => s.shaky);
	console.log(`\n[scan] 换装 ${list.length} 张，改造立绘 ${result.remodels.length} 张`);
	console.log("[scan] 类型分布", list.reduce((m, s) => ((m[s.kind] = (m[s.kind] ?? 0) + 1), m), {}));
	if (shaky.length) {
		console.log(`[scan] 其中 ${shaky.length} 张是低置信匹配，建议核对：`);
		for (const s of shaky.slice(0, 12)) console.log("   ~", s.name, "（", s.ship, "）", s.how);
	}
	if (unknown.size) {
		console.log(`[scan] 还有 ${unknown.size} 段文字既不认识也不是改造，可能是新皮肤：`);
		for (const t of [...unknown.keys()].slice(0, 12)) console.log("   ?", t);
	}
	console.log(`[scan] 明细 ${path.relative(ROOT, path.join(CACHE, "result.json"))}`);

	if (merge) {
		const mine = JSON.parse(readFileSync(MINE, "utf8"));
		const before = mine.skins.length;
		for (const s of list) if (!s.shaky && !mine.skins.includes(s.name)) mine.skins.push(s.name);
		mine.updated = new Date().toISOString().slice(0, 10);
		writeFileSync(MINE, JSON.stringify(mine, null, 1) + "\n");
		console.log(`[scan] 已并进 mine.json：${before} → ${mine.skins.length}（低置信项没并，先人工看）`);
	}
}

main().catch((err) => {
	console.error("[scan] 失败：", err.message);
	process.exit(1);
});
