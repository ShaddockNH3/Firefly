<script lang="ts">
import { onMount } from "svelte";
import { novelSorts, novelStatuses } from "@/config/media";
import { ALL, countAll, countStatuses, sortMedia } from "@/utils/media-utils";
import MediaFilters from "../media/MediaFilters.svelte";

interface Book {
	slug: string;
	title: string;
	author: string;
	platform: string;
	category: string;
	tags: string[];
	status: string;
	score: number | null;
	length: string;
	note: string;
	act: string;
}

interface SourceMeta {
	name: string;
	platform: string;
	note: string;
}

interface Props {
	books: Book[];
	sourceJson: string;
	sourceMeta: SourceMeta[];
	sourceUpdated: string;
}

let { books, sourceJson, sourceMeta, sourceUpdated }: Props = $props();

const PLATS: [string, string][] = [
	["fanqie", "番茄"],
	["qidian", "起点"],
	["light", "轻小说"],
];

let tab = $state(PLATS[0][0]);
let st = $state(ALL);
let cat = $state(ALL);
let sort = $state(novelSorts[0].key);
let codeOpen = $state(false);
let copied = $state(false);

// 从详情页返回时靠 hash 停在原来的平台
onMount(() => {
	const h = location.hash.slice(1);
	if (h && PLATS.some(([k]) => k === h)) tab = h;
});

const platBooks = $derived(books.filter((b) => b.platform === tab));

const rows = $derived([
	{
		key: "st",
		label: "状态",
		items: countStatuses(platBooks, novelStatuses, (b) => b.status),
	},
	{ key: "cat", label: "分类", items: countAll(platBooks, (b) => b.category) },
	{
		key: "sort",
		label: "排序",
		items: novelSorts.map((s) => [s.label] as [string]),
	},
]);

const sortLabel = $derived(
	novelSorts.find((s) => s.key === sort)?.label ?? novelSorts[0].label,
);
const values = $derived({ st, cat, sort: sortLabel });

function pick(key: string, value: string) {
	if (key === "st") st = value;
	else if (key === "cat") cat = value;
	else if (key === "sort")
		sort = novelSorts.find((s) => s.label === value)?.key ?? sort;
}

const list = $derived(
	sortMedia(
		platBooks.filter(
			(b) =>
				(st === ALL || b.status === st) && (cat === ALL || b.category === cat),
		),
		sort,
		{ recent: (b) => b.act, score: (b) => b.score, title: (b) => b.title },
	),
);

function pickTab(key: string) {
	tab = key;
	st = ALL;
	cat = ALL;
	history.replaceState(null, "", key === "src" ? location.pathname : `#${key}`);
	window.scrollTo({ top: 0 });
}

async function copyJson() {
	try {
		await navigator.clipboard.writeText(sourceJson);
		copied = true;
		setTimeout(() => (copied = false), 1600);
	} catch {
		copied = false;
	}
}
</script>

<div class="mg-tabs">
	{#each PLATS as [k, label] (k)}
		<button class="mg-tab" data-on={tab === k} onclick={() => pickTab(k)}>
			{label}<span class="mg-tab-n">{books.filter((b) => b.platform === k).length}</span>
		</button>
	{/each}
	<button class="mg-tab" data-on={tab === "src"} onclick={() => pickTab("src")}>书源分享</button>
</div>

{#if tab === "src"}
	<section>
		<h2 class="mg-src-t">书源分享</h2>
		<p class="mg-src-s">
			自用书源，番茄 / 起点 / 轻小说共 {sourceMeta.length} 个源 · 更新于 {sourceUpdated}
		</p>

		<div class="mg-code-wrap" class:open={codeOpen}>
			<pre class="mg-code"><code>{sourceJson}</code></pre>
		</div>
		<div class="mg-code-row">
			<button class="mg-btn" onclick={copyJson}>{copied ? "已复制" : "复制 JSON"}</button>
			<button class="mg-btn plain" onclick={() => (codeOpen = !codeOpen)}>
				{codeOpen ? "收起" : "展开全部"}
			</button>
		</div>

		<div class="mg-src-list">
			{#each sourceMeta as s (s.name)}
				<div class="mg-src-item">
					<span class="mg-src-n">{s.name}</span>
					<span class="mg-src-p">{s.platform}</span>
					<span class="mg-src-note">{s.note}</span>
				</div>
			{/each}
		</div>
		<p class="mg-hint">番茄同名书很多，搜索建议直接搜作者名。</p>
	</section>
{:else}
	<MediaFilters {rows} {values} onpick={pick} />

	{#if list.length}
		<div class="nb-grid">
			{#each list as b (b.slug)}
				<a class="nb-card" href={`/novels/${b.slug}/`}>
					<div class="nb-cover" data-plat={b.platform}>
						<span class="nb-cover-t">{b.title}</span>
						{#if b.status}<span class="nb-badge">{b.status}</span>{/if}
					</div>
					<div class="nb-body">
						<div class="nb-head">
							<span class="nb-title">{b.title}</span>
							{#if b.score !== null}<span class="nb-score">{b.score.toFixed(1)}</span>{/if}
						</div>
						<div class="nb-meta">{[b.author, b.length].filter(Boolean).join(" · ")}</div>
						{#if b.note}<div class="nb-note">{b.note}</div>{/if}
						<div class="nb-tags">
							{#if b.category}<span class="mg-tag cat">{b.category}</span>{/if}
							{#each b.tags as t (t)}<span class="mg-tag">{t}</span>{/each}
						</div>
					</div>
				</a>
			{/each}
		</div>
	{:else}
		<p class="mg-empty">这个条件下没有书。</p>
	{/if}
{/if}

<style>
	.nb-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
		gap: 12px;
	}
	@media (max-width: 720px) {
		.nb-grid {
			grid-template-columns: 1fr;
		}
	}
	.nb-card {
		display: flex;
		gap: 14px;
		padding: 14px;
		border: 1px solid var(--line-divider);
		border-radius: 14px;
		background: var(--card-bg);
		text-decoration: none;
		transition: border-color 0.15s, box-shadow 0.15s, transform 0.15s;
	}
	.nb-card:hover {
		border-color: color-mix(in oklch, var(--primary) 45%, var(--line-divider));
		box-shadow: 0 6px 18px rgb(0 0 0 / 0.06);
		transform: translateY(-1px);
	}
	.nb-cover {
		position: relative;
		width: 86px;
		height: 116px;
		flex: none;
		border-radius: 9px;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 9px 7px;
		overflow: hidden;
	}
	.nb-cover[data-plat="fanqie"] {
		background: linear-gradient(158deg, #fff3ec, #ffdcc9);
		color: #a33f16;
		box-shadow: inset 0 0 0 1px rgb(163 63 22 / 0.12);
	}
	.nb-cover[data-plat="qidian"] {
		background: linear-gradient(158deg, #fff0f0, #ffd5d5);
		color: #9c2020;
		box-shadow: inset 0 0 0 1px rgb(156 32 32 / 0.12);
	}
	.nb-cover[data-plat="light"] {
		background: linear-gradient(158deg, #f2f1ff, #ddd9ff);
		color: #4b3f9e;
		box-shadow: inset 0 0 0 1px rgb(75 63 158 / 0.12);
	}
	:global(.dark) .nb-cover[data-plat="fanqie"] {
		background: linear-gradient(158deg, #3a2419, #2a1a12);
		color: #f0b394;
	}
	:global(.dark) .nb-cover[data-plat="qidian"] {
		background: linear-gradient(158deg, #3a1d1d, #281414);
		color: #f0a0a0;
	}
	:global(.dark) .nb-cover[data-plat="light"] {
		background: linear-gradient(158deg, #241f45, #1a1633);
		color: #b3a9f0;
	}
	.nb-cover-t {
		font-size: 0.66rem;
		font-weight: 600;
		line-height: 1.4;
		text-align: center;
		display: -webkit-box;
		-webkit-line-clamp: 5;
		-webkit-box-orient: vertical;
		overflow: hidden;
		word-break: break-all;
	}
	.nb-badge {
		position: absolute;
		top: 5px;
		right: 5px;
		font-size: 0.58rem;
		font-weight: 700;
		padding: 1px 5px;
		border-radius: 5px;
		background: rgb(255 255 255 / 0.86);
		color: inherit;
	}
	:global(.dark) .nb-badge {
		background: rgb(0 0 0 / 0.45);
	}
	.nb-body {
		flex: 1;
		min-width: 0;
		display: flex;
		flex-direction: column;
		gap: 5px;
	}
	.nb-head {
		display: flex;
		align-items: baseline;
		gap: 8px;
	}
	.nb-title {
		font-size: 0.95rem;
		font-weight: 700;
		color: var(--deep-text);
		line-height: 1.35;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
	.nb-score {
		margin-left: auto;
		flex: none;
		font-size: 0.9rem;
		font-weight: 700;
		color: var(--primary);
		font-variant-numeric: tabular-nums;
	}
	.nb-meta {
		font-size: 0.74rem;
		color: var(--content-meta);
	}
	.nb-note {
		font-size: 0.74rem;
		color: var(--content-meta);
		opacity: 0.9;
		line-height: 1.5;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
	.nb-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 5px;
		margin-top: auto;
		padding-top: 4px;
	}
</style>
