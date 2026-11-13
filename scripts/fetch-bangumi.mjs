#!/usr/bin/env node
/**
 * 番剧条目信息：按本地 md 里写的 bgm 条目 ID，从番组计划补封面/简介/集数/评分。
 *
 * 分工（A 模式）：
 *   src/content/anime/<id>.md   我的记录（状态、评分、看到第几集、长评）——手写
 *   src/data/anime/subjects.json 条目信息（封面、简介、放送日期、集数、评分、标签）——本脚本生成
 *
 * 只请求 md 里出现过的条目，结果按 ID 缓存；改一部长评不会触发任何请求。
 * 官方要求非浏览器客户端带可识别的 User-Agent，默认 UA 会被拦。
 *
 * 用法：
 *   pnpm fetch:bangumi
 *
 * 产物：
 *   src/data/anime/subjects.json
 */

import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

const ROOT = path.resolve(import.meta.dirname, "..");

// 番剧和漫画共用这套逻辑：md 里写 bgm 条目 ID，条目信息从这里补。
// --collection manga 就读 src/content/manga，产物落到 src/data/manga/subjects.json
const args = process.argv.slice(2);
const pick = (name, fallback) => {
	const i = args.indexOf(`--${name}`);
	return i >= 0 && args[i + 1] ? args[i + 1] : fallback;
};
const COLLECTION = pick("collection", "anime");

const CONTENT_DIR = path.join(ROOT, "src", "content", COLLECTION);
const DATA_DIR = path.join(ROOT, "src", "data", COLLECTION);
const OUT_FILE = path.join(DATA_DIR, "subjects.json");
const CACHE_DIR = path.join(ROOT, "scripts", ".cache", `bangumi-${COLLECTION}`);
const CACHE_FILE = path.join(CACHE_DIR, "subjects.json");

const API = "https://api.bgm.tv";
const UA = "ShaddockNH3/blog (https://blog.attilio.cc)";
const DELAY = 300;

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function readCache() {
	try {
		return JSON.parse(await readFile(CACHE_FILE, "utf8"));
	} catch {
		return {};
	}
}

/** 收集 md 里声明的条目 ID */
async function collectIds() {
	let files = [];
	try {
		files = (await readdir(CONTENT_DIR)).filter((f) => f.endsWith(".md"));
	} catch {
		return [];
	}

	const ids = [];
	for (const file of files) {
		const raw = await readFile(path.join(CONTENT_DIR, file), "utf8");
		const { data } = matter(raw);
		const id = Number(data.bgm ?? path.basename(file, ".md"));
		if (!Number.isFinite(id) || id <= 0) {
			console.warn(`[bangumi] ${file} 没有 bgm 条目 ID，跳过`);
			continue;
		}
		ids.push(id);
	}
	return [...new Set(ids)];
}

async function fetchSubject(id) {
	const res = await fetch(`${API}/v0/subjects/${id}`, {
		headers: { "User-Agent": UA, Accept: "application/json" },
	});
	if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
	const s = await res.json();
	return {
		cn: s.name_cn || s.name || String(id),
		jp: s.name || "",
		cover: s.images?.common || s.images?.large || "",
		date: s.date || "",
		eps: s.eps ?? 0,
		// 书籍（漫画）的卷数，番剧为 0
		volumes: s.volumes ?? 0,
		platform: s.platform ?? "",
		bgmScore: s.rating?.score ?? null,
		rank: s.rating?.rank ?? null,
		tags: (s.tags ?? []).slice(0, 8).map((t) => t.name),
		summary: s.summary ?? "",
	};
}

const ids = await collectIds();
console.log(`[bangumi:${COLLECTION}] 本地 md 声明了 ${ids.length} 个条目`);

const cache = await readCache();
const items = {};
let fetched = 0;
let failed = 0;

for (const id of ids) {
	// 缓存里可能是老版本存的残缺结构，缺封面就重新抓
	if (cache[id]?.cover) {
		items[id] = cache[id];
		continue;
	}
	try {
		items[id] = await fetchSubject(id);
		cache[id] = items[id];
		fetched += 1;
		await sleep(DELAY);
	} catch (err) {
		failed += 1;
		console.warn(
			`[bangumi] ${id} 拉取失败（${err.message}），这条先不显示条目信息`,
		);
	}
}

await mkdir(DATA_DIR, { recursive: true });
await mkdir(CACHE_DIR, { recursive: true });
await writeFile(CACHE_FILE, JSON.stringify(cache, null, "\t"), "utf8");
await writeFile(
	OUT_FILE,
	JSON.stringify({ fetchedAt: new Date().toISOString(), items }, null, "\t") +
		"\n",
	"utf8",
);

console.log(
	`[bangumi] 写入 ${Object.keys(items).length} 条（新请求 ${fetched}，失败 ${failed}）→ ${path.relative(ROOT, OUT_FILE)}`,
);
