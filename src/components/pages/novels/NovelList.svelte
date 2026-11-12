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

let tab = $state("src");
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
	<button class="mg-tab" data-on={tab === "src"} onclick={() => pickTab("src")}>书源分享</button>
	{#each PLATS as [k, label] (k)}
		<button class="mg-tab" data-on={tab === k} onclick={() => pickTab(k)}>
			{label}<span class="mg-tab-n">{books.filter((b) => b.platform === k).length}</span>
		</button>
	{/each}
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
		<div class="mg-list">
			{#each list as b (b.slug)}
				<a class="mg-book" href={`/novels/${b.slug}/`}>
					<div class="mg-book-main">
						<div class="mg-book-t">
							<span class="mg-book-n">{b.title}</span>
							{#if b.category}<span class="mg-tag cat">{b.category}</span>{/if}
							{#each b.tags as t (t)}<span class="mg-tag">{t}</span>{/each}
						</div>
						<div class="mg-book-a">{[b.author, b.length].filter(Boolean).join(" · ")}</div>
						{#if b.note}<div class="mg-book-d">{b.note}</div>{/if}
					</div>
					<div class="mg-book-r">
						<div class="mg-score" class:none={b.score === null}>
							{b.score !== null ? b.score.toFixed(1) : "未评"}
						</div>
						{#if b.status}<div class="mg-state">{b.status}</div>{/if}
					</div>
				</a>
			{/each}
		</div>
	{:else}
		<p class="mg-empty">这个条件下没有书。</p>
	{/if}
{/if}
