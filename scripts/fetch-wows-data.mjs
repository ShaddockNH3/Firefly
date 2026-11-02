#!/usr/bin/env node
/**
 * 从 wows-page 站点拉取战绩数据，覆盖 src/wows/data 下的三个 JSON。
 *
 * 数据源：https://shaddocknh3.github.io/wows-page/data/*.json
 * 拉取失败时保留本地已有文件，不让构建中断（离线开发也能 build）。
 *
 * 用法：
 *   node scripts/fetch-wows-data.mjs
 *   WOWS_DATA_URL=https://example.com/wows node scripts/fetch-wows-data.mjs
 *   WOWS_DATA_STRICT=1 node scripts/fetch-wows-data.mjs   # 失败即退出，供 CI 用
 */

import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const BASE = (process.env.WOWS_DATA_URL || "https://shaddocknh3.github.io/wows-page").replace(/\/$/, "");
const STRICT = process.env.WOWS_DATA_STRICT === "1";
const TIMEOUT = 20_000;

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DATA_DIR = path.join(ROOT, "src", "wows", "data");

const FILES = [
	{
		name: "profile.json",
		check: (d) => typeof d?.nickname === "string" && typeof d?.pvp?.battles === "number",
		summary: (d) => `${d.nickname} · ${d.realmLabel} · ${d.pvp.battles} 场`,
	},
	{
		name: "ships.json",
		check: (d) => Array.isArray(d) && d.length > 0 && typeof d[0]?.shipId === "number",
		summary: (d) => `${d.length} 艘船`,
	},
	{
		name: "meta.json",
		check: (d) => typeof d?.generatedAt === "string",
		summary: (d) => `抓取于 ${d.generatedAt}`,
	},
];

async function readLocal(name) {
	try {
		return JSON.parse(await readFile(path.join(DATA_DIR, name), "utf8"));
	} catch {
		return null;
	}
}

async function fetchOne(file) {
	const url = `${BASE}/data/${file.name}`;
	const res = await fetch(url, { signal: AbortSignal.timeout(TIMEOUT) });
	if (!res.ok) throw new Error(`HTTP ${res.status}`);
	const json = await res.json();
	if (!file.check(json)) throw new Error("返回内容格式不对");
	return json;
}

async function main() {
	if (process.env.WOWS_DATA_SKIP === "1") {
		console.log("→ 跳过战绩数据拉取（WOWS_DATA_SKIP=1），沿用本地文件");
		return;
	}

	console.log(`→ 拉取战绩数据：${BASE}`);
	let failed = 0;

	for (const file of FILES) {
		try {
			const json = await fetchOne(file);
			const before = await readLocal(file.name);
			const changed = JSON.stringify(before) !== JSON.stringify(json);

			await writeFile(path.join(DATA_DIR, file.name), `${JSON.stringify(json, null, "\t")}\n`);

			console.log(`  ✓ ${file.name.padEnd(13)} ${file.summary(json)}${changed ? "（已更新）" : ""}`);
		} catch (e) {
			failed += 1;
			console.warn(`  ✗ ${file.name.padEnd(13)} ${e.message}，沿用本地已有文件`);
		}
	}

	if (failed === FILES.length) {
		console.warn("  全部拉取失败，本次构建使用仓库里的旧数据");
		if (STRICT) process.exit(1);
	}
}

main().catch((e) => {
	console.error(`✗ 拉取失败：${e.message}`);
	if (STRICT) process.exit(1);
});
