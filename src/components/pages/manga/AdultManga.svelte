<script lang="ts">
import { onMount } from "svelte";
import Icon from "@/components/common/Icon.svelte";
import { ALL, countStatuses } from "@/utils/media-utils";
import MediaCard from "../media/MediaCard.svelte";
import MediaFilters from "../media/MediaFilters.svelte";

type Item = {
	k: string;
	t: string;
	s: string;
	f: string;
	y: string;
	c: string;
	sc?: number;
	nt?: string;
};

interface Props {
	payload: string;
}

let { payload }: Props = $props();

const CACHE_KEY = "pw:manga-adult";
const ITERATIONS = 100000;
const SALT_LEN = 16;
const IV_LEN = 12;
const TAG_LEN = 16;

let items = $state<Item[]>([]);
let pwd = $state("");
let busy = $state(false);
let wrong = $state(false);
let unlocked = $state(false);

// 筛选：状态 / 标签（Venera 收藏夹）/ 排序，和一般向同一套
let st = $state(ALL);
let tag = $state(ALL);
let sort = $state("recent");

let hashId = $state("");

const isScored = (x: Item) => Number.isFinite(x.sc) || !!x.nt;

const rows = $derived([
	{
		key: "st",
		label: "状态",
		items: countStatuses(items, ["已评", "未评"] as const, (x) =>
			isScored(x) ? "已评" : "未评",
		),
	},
	{
		key: "tag",
		label: "标签",
		items: [
			[ALL, items.length],
			...[
				...items.reduce(
					(m, x) => m.set(x.f || "其他", (m.get(x.f || "其他") ?? 0) + 1),
					new Map<string, number>(),
				),
			].sort((a, b) => b[1] - a[1]),
		] as [string, number][],
	},
	{
		key: "sort",
		label: "排序",
		items: [
			["最近", undefined],
			["评分", undefined],
			["书名", undefined],
		] as [string, number | undefined][],
	},
]);

const values = $derived({
	st,
	tag,
	sort: sort === "score" ? "评分" : sort === "title" ? "书名" : "最近",
});

function pick(key: string, value: string) {
	if (key === "st") st = value;
	else if (key === "tag") tag = value;
	else if (key === "sort")
		sort = value === "评分" ? "score" : value === "书名" ? "title" : "recent";
}

const list = $derived.by(() => {
	const arr = items.filter(
		(x) =>
			(st === ALL || (isScored(x) ? "已评" : "未评") === st) &&
			(tag === ALL || (x.f || "其他") === tag),
	);
	if (sort === "score") {
		arr.sort((a, b) => (b.sc ?? -1) - (a.sc ?? -1));
	} else if (sort === "title") {
		arr.sort((a, b) => a.t.localeCompare(b.t, "zh"));
	} else {
		arr.sort(
			(a, b) =>
				(b.y || "").localeCompare(a.y || "") || a.t.localeCompare(b.t, "zh"),
		);
	}
	return arr;
});

const detail = $derived(items.find((x) => String(x.k) === hashId) ?? null);

function b64ToBytes(b64: string) {
	const bin = atob(b64);
	const out = new Uint8Array(bin.length);
	for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
	return out;
}

async function decrypt(p: string) {
	const raw = b64ToBytes(payload);
	const salt = raw.slice(0, SALT_LEN);
	const iv = raw.slice(SALT_LEN, SALT_LEN + IV_LEN);
	const tag = raw.slice(SALT_LEN + IV_LEN, SALT_LEN + IV_LEN + TAG_LEN);
	const ct = raw.slice(SALT_LEN + IV_LEN + TAG_LEN);
	const combined = new Uint8Array(ct.length + TAG_LEN);
	combined.set(ct);
	combined.set(tag, ct.length);

	const enc = new TextEncoder();
	const km = await crypto.subtle.importKey(
		"raw",
		enc.encode(p),
		"PBKDF2",
		false,
		["deriveKey"],
	);
	const key = await crypto.subtle.deriveKey(
		{ name: "PBKDF2", salt, iterations: ITERATIONS, hash: "SHA-256" },
		km,
		{ name: "AES-GCM", length: 256 },
		false,
		["decrypt"],
	);
	const plain = await crypto.subtle.decrypt(
		{ name: "AES-GCM", iv },
		key,
		combined,
	);
	const data = JSON.parse(new TextDecoder().decode(plain)) as { items: Item[] };
	return data.items;
}

async function unlock(p: string) {
	busy = true;
	wrong = false;
	try {
		items = await decrypt(p);
		sessionStorage.setItem(CACHE_KEY, p);
		unlocked = true;
	} catch {
		wrong = true;
	} finally {
		busy = false;
	}
}

function onSubmit(e: SubmitEvent) {
	e.preventDefault();
	const p = pwd.trim();
	if (!p) return;
	unlock(p);
}

function lock() {
	unlocked = false;
	items = [];
	pwd = "";
	st = ALL;
	tag = ALL;
	location.hash = "";
	sessionStorage.removeItem(CACHE_KEY);
}

function syncHash() {
	hashId = location.hash.replace(/^#/, "");
}

function openDetail(k: string) {
	hashId = k;
	location.hash = k;
}

function closeDetail() {
	hashId = "";
	location.hash = "";
}

onMount(() => {
	syncHash();
	window.addEventListener("hashchange", syncHash);
	const cached = sessionStorage.getItem(CACHE_KEY);
	if (cached) unlock(cached);
	return () => window.removeEventListener("hashchange", syncHash);
});
</script>

{#if !unlocked}
	<div class="mb-4 flex items-center gap-3 flex-wrap">
		<h2 class="text-lg font-bold text-(--deep-text) m-0">成人向</h2>
		<span class="ml-auto text-[0.7rem] text-(--content-meta)">整页加密 · 密码解锁后显示</span>
	</div>

	<div class="mx-auto max-w-115 py-10 text-center">
		<div
			class="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-(--primary)/10 text-(--primary)"
		>
			<Icon icon="material-symbols:lock-outline" class="text-[26px]" />
		</div>
		<h3 class="m-0 mb-2 text-base font-bold text-(--deep-text)">本页受密码保护</h3>
		<p class="m-0 mb-5 text-[0.78rem] leading-relaxed text-(--content-meta)">
			清单在构建时已加密，没有密码时页面里只有一段密文。<br />未满 18 岁请勿继续。
		</p>
		<form class="flex flex-col gap-2" onsubmit={onSubmit}>
			<input
				type="password"
				autocomplete="off"
				placeholder="输入密码"
				bind:value={pwd}
				disabled={busy}
				class="w-full rounded-lg border border-(--line-divider) bg-black/3 px-3 py-2 text-sm text-(--deep-text) outline-hidden transition focus:border-(--primary) dark:bg-white/8"
			/>
			<button
				type="submit"
				disabled={busy}
				class="w-full rounded-lg bg-(--primary) py-2 text-sm font-semibold text-white transition hover:opacity-90 active:scale-[0.99] disabled:opacity-60"
			>
				{busy ? "解密中…" : "解锁"}
			</button>
		</form>
		{#if wrong}
			<p class="m-0 mt-3 text-[0.72rem] text-red-500 dark:text-red-400">密码不对</p>
		{/if}
		<p class="m-0 mt-4 text-[0.7rem] text-(--content-meta) opacity-70">
			密码只存在本地 sessionStorage，关掉标签页就没了
		</p>
	</div>
{:else if detail}
	<!-- 详情：跟一般向详情页同一套结构 -->
	<button type="button" class="md-back" onclick={closeDetail}>
		<Icon icon="material-symbols:chevron-right-rounded" class="text-[1rem]" />
		漫画
	</button>

	<div class="md-head">
		<div class="md-cover">
			{#if detail.c}<img src={detail.c} alt={detail.t} referrerpolicy="no-referrer" />{/if}
		</div>
		<div class="md-info">
			<h1 class="md-title">{detail.t}</h1>
			<div class="md-tags">
				<span class="md-tag">{detail.f}</span>
			</div>
			<div class="md-rows">
				{#if detail.s}<div class="md-row"><span class="md-k">社团</span><span class="md-v">{detail.s}</span></div>{/if}
				{#if detail.y}<div class="md-row"><span class="md-k">收录</span><span class="md-v">{detail.y}</span></div>{/if}
				<div class="md-row">
					<span class="md-k">分类</span><span class="md-v">{detail.f}</span>
				</div>
				{#if Number.isFinite(detail.sc)}
					<div class="md-row">
						<span class="md-k">我的评分</span>
						<span class="md-v">{detail.sc?.toFixed(1)} / 10</span>
					</div>
				{/if}
			</div>
			<button class="md-ext" type="button" title="点一下复制">{`#${detail.k}`}</button>
		</div>
	</div>

	<div class="mt-6 pt-5 border-t border-(--line-divider)">
		<div class="md-sec-t">
			评价
			{#if Number.isFinite(detail.sc)}<span class="md-sec-n">{detail.sc?.toFixed(1)}</span>{/if}
		</div>
		{#if detail.nt}
			<p class="md-review">{detail.nt}</p>
		{:else}
			<p class="md-empty">还没写评价。</p>
		{/if}
	</div>
{:else}
	<!-- 列表：标题行 + 状态/标签/排序 + 卡片墙，和一般向完全同一套 -->
	<div class="mb-4 flex items-center gap-3 flex-wrap">
		<h2 class="text-lg font-bold text-(--deep-text) m-0">漫画</h2>
		<span
			class="text-[0.72rem] font-semibold px-2 py-0.5 rounded-full bg-(--btn-regular-bg) text-(--btn-content) tabular-nums"
		>
			{items.length} 部
		</span>
		<span class="text-[0.72rem] text-(--content-meta)">
			已评 {items.filter(isScored).length}
		</span>
		<button
			class="ml-auto cursor-pointer border-0 bg-none p-0 text-[0.74rem] text-(--content-meta) hover:text-(--primary)"
			onclick={lock}
		>
			上锁
		</button>
	</div>

	<MediaFilters {rows} {values} onpick={pick} />

	{#if list.length}
		<div class="mg-grid">
			{#each list as x (x.k)}
				<MediaCard
					href={`#${x.k}`}
					title={x.t}
					sub={[x.s, x.y].filter(Boolean).join(" · ")}
					cover={x.c}
					score={x.sc ?? null}
					status={isScored(x) ? "" : "未评"}
					onclick={(e) => {
						e.preventDefault();
						openDetail(String(x.k));
					}}
				/>
			{/each}
		</div>
	{:else}
		<p class="mg-empty">没有符合条件的作品。</p>
	{/if}
{/if}
