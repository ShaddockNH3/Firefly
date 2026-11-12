<script lang="ts">
	import { onMount } from "svelte";

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
	const ALL = "全部";
	const SORTS: [string, string][] = [
		["act", "最近"],
		["score", "评分"],
		["title", "书名"],
	];

	let tab = $state("src");
	let st = $state(ALL);
	let cat = $state(ALL);
	let sort = $state("act");
	let codeOpen = $state(false);
	let copied = $state(false);

	// 从详情页返回时靠 hash 停在原来的平台
	onMount(() => {
		const h = location.hash.slice(1);
		if (h && PLATS.some(([k]) => k === h)) tab = h;
	});

	const platBooks = $derived(books.filter((b) => b.platform === tab));

	const cats = $derived.by(() => {
		const m = new Map<string, number>();
		for (const b of platBooks) if (b.category) m.set(b.category, (m.get(b.category) ?? 0) + 1);
		return [...m.entries()].sort((a, b) => b[1] - a[1]);
	});

	const statuses = $derived.by(() => {
		const order = ["在读", "读过", "想读", "弃坑"];
		return order.map((s) => [s, platBooks.filter((b) => b.status === s).length] as [string, number]).filter(([, n]) => n > 0);
	});

	const list = $derived.by(() => {
		const items = platBooks.filter(
			(b) => (st === ALL || b.status === st) && (cat === ALL || b.category === cat),
		);
		const arr = [...items];
		if (sort === "score") arr.sort((a, b) => (b.score ?? -1) - (a.score ?? -1));
		else if (sort === "title") arr.sort((a, b) => a.title.localeCompare(b.title, "zh"));
		else arr.sort((a, b) => (b.act || "").localeCompare(a.act || "") || a.title.localeCompare(b.title, "zh"));
		return arr;
	});

	function pick(k: string) {
		tab = k;
		st = ALL;
		cat = ALL;
		history.replaceState(null, "", k === "src" ? location.pathname : `#${k}`);
		if (typeof window !== "undefined") window.scrollTo({ top: 0 });
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

<div class="nv-tabs">
	<button class="nv-tab" data-on={tab === "src"} onclick={() => pick("src")}>书源分享</button>
	{#each PLATS as [k, label] (k)}
		<button class="nv-tab" data-on={tab === k} onclick={() => pick(k)}>
			{label}<span class="nv-tab-n">{books.filter((b) => b.platform === k).length}</span>
		</button>
	{/each}
</div>

{#if tab === "src"}
	<section class="nv-src">
		<h2 class="nv-sec-t">书源分享</h2>
		<p class="nv-sec-s">
			自用书源，番茄 / 起点 / 轻小说共 {sourceMeta.length} 个源 · 更新于 {sourceUpdated}
		</p>

		<div class="nv-code-wrap" class:open={codeOpen}>
			<pre class="nv-code"><code>{sourceJson}</code></pre>
		</div>
		<div class="nv-code-row">
			<button class="nv-btn" onclick={copyJson}>{copied ? "已复制" : "复制 JSON"}</button>
			<button class="nv-btn plain" onclick={() => (codeOpen = !codeOpen)}>
				{codeOpen ? "收起" : "展开全部"}
			</button>
		</div>

		<div class="nv-src-list">
			{#each sourceMeta as s (s.name)}
				<div class="nv-src-item">
					<span class="nv-src-n">{s.name}</span>
					<span class="nv-src-p">{s.platform}</span>
					<span class="nv-src-note">{s.note}</span>
				</div>
			{/each}
		</div>
		<p class="nv-hint">番茄同名书很多，搜索建议直接搜作者名。</p>
	</section>
{:else}
	<div class="nv-filters">
		{#if statuses.length}
			<div class="nv-row">
				<span class="nv-row-t">状态</span>
				<button class="nv-chip" data-on={st === ALL} onclick={() => (st = ALL)}>
					{ALL}<span class="nv-chip-n">{platBooks.length}</span>
				</button>
				{#each statuses as [name, n] (name)}
					<button class="nv-chip" data-on={st === name} onclick={() => (st = name)}>
						{name}<span class="nv-chip-n">{n}</span>
					</button>
				{/each}
			</div>
		{/if}

		{#if cats.length > 1}
			<div class="nv-row">
				<span class="nv-row-t">分类</span>
				<button class="nv-chip" data-on={cat === ALL} onclick={() => (cat = ALL)}>
					{ALL}<span class="nv-chip-n">{platBooks.length}</span>
				</button>
				{#each cats as [name, n] (name)}
					<button class="nv-chip" data-on={cat === name} onclick={() => (cat = name)}>
						{name}<span class="nv-chip-n">{n}</span>
					</button>
				{/each}
			</div>
		{/if}

		<div class="nv-row">
			<span class="nv-row-t">排序</span>
			{#each SORTS as [k, label] (k)}
				<button class="nv-chip" data-on={sort === k} onclick={() => (sort = k)}>{label}</button>
			{/each}
		</div>
	</div>

	{#if list.length}
		<div class="nv-list">
			{#each list as b (b.slug)}
				<a class="nv-book" href={`/novels/${b.slug}/`}>
					<div class="nv-book-main">
						<div class="nv-book-t">
							<span class="nv-book-n">{b.title}</span>
							{#if b.category}<span class="nv-tag cat">{b.category}</span>{/if}
							{#each b.tags as t (t)}<span class="nv-tag">{t}</span>{/each}
						</div>
						<div class="nv-book-a">
							{[b.author, b.length].filter(Boolean).join(" · ")}
						</div>
						{#if b.note}<div class="nv-book-d">{b.note}</div>{/if}
					</div>
					<div class="nv-book-r">
						<div class="nv-score" class:none={b.score === null}>
							{b.score !== null ? b.score.toFixed(1) : "未评"}
						</div>
						{#if b.status}<div class="nv-state">{b.status}</div>{/if}
					</div>
				</a>
			{/each}
		</div>
	{:else}
		<p class="nv-empty">这个条件下没有书。</p>
	{/if}
{/if}

<style>
	.nv-tabs {
		display: flex;
		gap: 6px;
		flex-wrap: wrap;
		margin-bottom: 16px;
	}
	.nv-tab {
		display: inline-flex;
		align-items: center;
		gap: 4px;
		padding: 6px 16px;
		border-radius: 999px;
		font-size: 0.84rem;
		font-weight: 600;
		color: var(--content-meta);
		background: var(--card-bg);
		border: 1px solid var(--line-divider);
		cursor: pointer;
		font-family: inherit;
		transition: background 0.15s, color 0.15s, border-color 0.15s;
	}
	.nv-tab:hover {
		background: var(--btn-regular-bg);
	}
	.nv-tab[data-on="true"] {
		background: var(--primary);
		border-color: transparent;
		color: #fff;
	}
	.nv-tab-n {
		font-size: 0.68rem;
		opacity: 0.55;
		font-variant-numeric: tabular-nums;
	}
	.nv-tab[data-on="true"] .nv-tab-n {
		opacity: 0.8;
	}

	.nv-sec-t {
		font-size: 0.95rem;
		font-weight: 700;
		color: var(--deep-text);
		margin: 0 0 4px;
	}
	.nv-sec-s {
		font-size: 0.78rem;
		color: var(--content-meta);
		margin: 0 0 14px;
	}
	.nv-code-wrap {
		--code-bg: color-mix(in oklch, var(--btn-regular-bg) 45%, var(--card-bg));
		position: relative;
		border: 1px solid var(--line-divider);
		border-radius: 0.75rem;
		background: var(--code-bg);
		overflow: hidden;
		max-height: 150px;
	}
	.nv-code-wrap.open {
		max-height: 60vh;
		overflow: auto;
	}
	.nv-code-wrap::after {
		content: "";
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		height: 52px;
		background: linear-gradient(transparent, var(--code-bg));
		pointer-events: none;
	}
	.nv-code-wrap.open::after {
		display: none;
	}
	.nv-code {
		margin: 0;
		padding: 12px 14px;
		font:
			0.76rem/1.7 ui-monospace,
			Menlo,
			monospace;
		color: color-mix(in oklch, var(--deep-text) 82%, transparent);
		white-space: pre-wrap;
		word-break: break-word;
	}
	.nv-code-row {
		display: flex;
		gap: 8px;
		margin-top: 12px;
	}
	.nv-btn {
		padding: 6px 14px;
		border-radius: 999px;
		font-size: 0.78rem;
		font-weight: 600;
		color: #fff;
		background: var(--primary);
		border: 1px solid transparent;
		cursor: pointer;
		font-family: inherit;
	}
	.nv-btn.plain {
		color: var(--content-meta);
		background: var(--card-bg);
		border-color: var(--line-divider);
	}

	.nv-src-list {
		display: flex;
		flex-direction: column;
		margin-top: 18px;
		padding-top: 6px;
		border-top: 1px solid var(--line-divider);
	}
	.nv-src-item {
		display: flex;
		align-items: center;
		gap: 10px;
		padding: 9px 0;
		border-bottom: 1px solid var(--line-divider);
		font-size: 0.8rem;
	}
	.nv-src-item:last-child {
		border-bottom: none;
	}
	.nv-src-n {
		font-weight: 600;
		color: var(--deep-text);
	}
	.nv-src-p {
		font-size: 0.66rem;
		padding: 1px 6px;
		border-radius: 6px;
		background: var(--btn-regular-bg);
		color: var(--content-meta);
		white-space: nowrap;
	}
	.nv-src-note {
		margin-left: auto;
		font-size: 0.74rem;
		color: var(--content-meta);
		text-align: right;
	}
	.nv-hint {
		font-size: 0.72rem;
		color: var(--content-meta);
		margin: 12px 0 0;
	}

	.nv-filters {
		display: flex;
		flex-direction: column;
		gap: 8px;
		margin-bottom: 16px;
	}
	.nv-row {
		display: flex;
		align-items: center;
		gap: 6px;
		flex-wrap: wrap;
		row-gap: 7px;
	}
	.nv-row-t {
		font-size: 0.72rem;
		color: var(--content-meta);
		min-width: 40px;
		opacity: 0.75;
	}
	.nv-chip {
		display: inline-flex;
		align-items: center;
		gap: 4px;
		padding: 5px 10px;
		border-radius: 999px;
		font-size: 0.78rem;
		font-weight: 500;
		color: var(--content-meta);
		background: var(--card-bg);
		border: 1px solid var(--line-divider);
		cursor: pointer;
		font-family: inherit;
		transition: background 0.15s, color 0.15s, border-color 0.15s;
	}
	.nv-chip:hover {
		background: var(--btn-regular-bg);
	}
	.nv-chip[data-on="true"] {
		background: var(--primary);
		border-color: transparent;
		color: #fff;
	}
	.nv-chip-n {
		font-size: 0.68rem;
		opacity: 0.55;
		font-variant-numeric: tabular-nums;
	}
	.nv-chip[data-on="true"] .nv-chip-n {
		opacity: 0.8;
	}

	.nv-list {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
	.nv-book {
		display: flex;
		gap: 14px;
		align-items: flex-start;
		padding: 14px 16px;
		border: 1px solid var(--line-divider);
		border-radius: 0.85rem;
		background: var(--card-bg);
		text-decoration: none;
		transition: border-color 0.15s, box-shadow 0.15s;
	}
	.nv-book:hover {
		border-color: color-mix(in oklch, var(--primary) 40%, var(--line-divider));
		box-shadow: 0 6px 18px rgb(0 0 0 / 0.05);
	}
	.nv-book-main {
		flex: 1;
		min-width: 0;
	}
	.nv-book-t {
		display: flex;
		align-items: center;
		gap: 8px;
		flex-wrap: wrap;
	}
	.nv-book-n {
		font-size: 0.95rem;
		font-weight: 650;
		color: var(--deep-text);
	}
	.nv-book:hover .nv-book-n {
		color: var(--primary);
	}
	.nv-tag {
		font-size: 0.68rem;
		padding: 1px 7px;
		border-radius: 6px;
		background: var(--btn-regular-bg);
		color: var(--content-meta);
	}
	.nv-tag.cat {
		color: var(--primary);
		background: color-mix(in oklch, var(--primary) 12%, var(--card-bg));
	}
	.nv-book-a {
		font-size: 0.74rem;
		color: var(--content-meta);
		margin-top: 3px;
	}
	.nv-book-d {
		font-size: 0.8rem;
		color: var(--content-meta);
		margin-top: 6px;
	}
	.nv-book-r {
		flex-shrink: 0;
		text-align: right;
		font-variant-numeric: tabular-nums;
	}
	.nv-score {
		font-size: 1.15rem;
		font-weight: 700;
		line-height: 1.25;
		color: var(--primary);
	}
	.nv-score.none {
		font-size: 0.8rem;
		font-weight: 500;
		color: var(--content-meta);
	}
	.nv-state {
		font-size: 0.68rem;
		color: var(--content-meta);
		margin-top: 2px;
	}
	.nv-empty {
		padding: 40px 0;
		text-align: center;
		font-size: 0.85rem;
		color: var(--content-meta);
	}
</style>
