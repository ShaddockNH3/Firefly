<script lang="ts">
	interface Item {
		id: number;
		cn: string;
		jp: string;
		cover: string;
		date: string;
		eps: number;
		bgmScore: number | null;
		rank: number | null;
		tags: string[];
		status: string;
		score: number | null;
		ep: number;
		updated: string;
	}

	interface Props {
		items: Item[];
	}

	let { items }: Props = $props();

	const ALL = "全部";
	const STATUSES = ["在看", "看过", "想看", "搁置", "抛弃"];
	const SORTS: [string, string][] = [
		["recent", "最近"],
		["score", "我的评分"],
		["bgm", "Bangumi 评分"],
		["date", "放送"],
	];

	let st = $state(ALL);
	let tag = $state(ALL);
	let sort = $state("recent");

	const statuses = $derived.by(() =>
		STATUSES.map((s) => [s, items.filter((a) => a.status === s).length] as [string, number]).filter(
			([, n]) => n > 0,
		),
	);

	// 只收出现两次以上的标签，避免每个条目的标签都变成一枚 chip
	const tags = $derived.by(() => {
		const m = new Map<string, number>();
		for (const a of items) for (const t of a.tags) m.set(t, (m.get(t) ?? 0) + 1);
		return [...m.entries()].filter(([, n]) => n >= 2).sort((a, b) => b[1] - a[1]);
	});

	const list = $derived.by(() => {
		const arr = items.filter(
			(a) => (st === ALL || a.status === st) && (tag === ALL || a.tags.includes(tag)),
		);
		if (sort === "score") arr.sort((a, b) => (b.score ?? -1) - (a.score ?? -1));
		else if (sort === "bgm") arr.sort((a, b) => (b.bgmScore ?? 0) - (a.bgmScore ?? 0));
		else if (sort === "date") arr.sort((a, b) => (b.date || "").localeCompare(a.date || ""));
		else arr.sort((a, b) => (b.updated || "").localeCompare(a.updated || "") || a.cn.localeCompare(b.cn, "zh"));
		return arr;
	});
</script>

{#if items.length > 1}
	<div class="an-filters">
		{#if statuses.length}
			<div class="an-row">
				<span class="an-row-t">状态</span>
				<button class="an-chip" data-on={st === ALL} onclick={() => (st = ALL)}>
					{ALL}<span class="an-chip-n">{items.length}</span>
				</button>
				{#each statuses as [name, n] (name)}
					<button class="an-chip" data-on={st === name} onclick={() => (st = name)}>
						{name}<span class="an-chip-n">{n}</span>
					</button>
				{/each}
			</div>
		{/if}

		{#if tags.length > 1}
			<div class="an-row">
				<span class="an-row-t">标签</span>
				<button class="an-chip" data-on={tag === ALL} onclick={() => (tag = ALL)}>
					{ALL}<span class="an-chip-n">{items.length}</span>
				</button>
				{#each tags as [name, n] (name)}
					<button class="an-chip" data-on={tag === name} onclick={() => (tag = name)}>
						{name}<span class="an-chip-n">{n}</span>
					</button>
				{/each}
			</div>
		{/if}

		<div class="an-row">
			<span class="an-row-t">排序</span>
			{#each SORTS as [k, label] (k)}
				<button class="an-chip" data-on={sort === k} onclick={() => (sort = k)}>{label}</button>
			{/each}
		</div>
	</div>
{/if}

{#if list.length}
	<div class="an-grid">
		{#each list as a (a.id)}
			<a class="an-i" href={`/anime/${a.id}/`} title={a.cn}>
				<div class="an-cv">
					{#if a.cover}
						<img src={a.cover} alt={a.cn} loading="lazy" referrerpolicy="no-referrer" />
					{/if}
					{#if a.score !== null}
						<span class="an-score">{a.score.toFixed(1)}</span>
					{/if}
					{#if a.status}
						<span class="an-st" data-k={a.status}>{a.status}</span>
					{/if}
				</div>
				<div class="an-nm">{a.cn}</div>
				<div class="an-sub">{[a.date.slice(0, 4), a.eps ? `${a.eps} 集` : ""].filter(Boolean).join(" · ")}</div>
				{#if a.status === "在看" && a.ep > 0 && a.eps > 0}
					<div class="an-bar"><i style={`width:${Math.min(100, Math.round((a.ep / a.eps) * 100))}%`}></i></div>
					<div class="an-bar-t">{a.ep} / {a.eps}</div>
				{/if}
			</a>
		{/each}
	</div>
{:else}
	<p class="an-empty">还没有收藏的番剧。</p>
{/if}

<style>
	.an-filters {
		display: flex;
		flex-direction: column;
		gap: 8px;
		margin-bottom: 16px;
	}
	.an-row {
		display: flex;
		align-items: center;
		gap: 6px;
		flex-wrap: wrap;
		row-gap: 7px;
	}
	.an-row-t {
		font-size: 0.72rem;
		color: var(--content-meta);
		min-width: 40px;
		opacity: 0.75;
	}
	.an-chip {
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
	.an-chip:hover {
		background: var(--btn-regular-bg);
	}
	.an-chip[data-on="true"] {
		background: var(--primary);
		border-color: transparent;
		color: #fff;
	}
	.an-chip-n {
		font-size: 0.68rem;
		opacity: 0.55;
		font-variant-numeric: tabular-nums;
	}
	.an-chip[data-on="true"] .an-chip-n {
		opacity: 0.8;
	}

	.an-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(142px, 1fr));
		gap: 18px 14px;
	}
	.an-i {
		display: block;
		min-width: 0;
		text-decoration: none;
	}
	.an-cv {
		position: relative;
		aspect-ratio: 2 / 3;
		border-radius: 12px;
		overflow: hidden;
		background: var(--btn-regular-bg);
		box-shadow: 0 1px 2px rgb(0 0 0 / 0.05);
		transition: transform 0.18s, box-shadow 0.18s;
	}
	.an-i:hover .an-cv {
		transform: translateY(-2px);
		box-shadow: 0 8px 20px rgb(0 0 0 / 0.12);
	}
	.an-cv img {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	.an-score {
		position: absolute;
		top: 7px;
		right: 7px;
		min-width: 30px;
		padding: 1px 7px;
		border-radius: 8px;
		font-size: 0.72rem;
		font-weight: 800;
		line-height: 1.5;
		text-align: center;
		color: var(--primary);
		background: rgb(255 255 255 / 0.92);
		font-variant-numeric: tabular-nums;
	}
	:global(.dark) .an-score {
		background: rgb(0 0 0 / 0.55);
	}
	.an-st {
		position: absolute;
		left: 7px;
		bottom: 7px;
		padding: 1px 7px;
		border-radius: 7px;
		font-size: 0.66rem;
		font-weight: 600;
		color: #fff;
		background: rgb(0 0 0 / 0.5);
		backdrop-filter: blur(4px);
	}
	.an-st[data-k="看过"] {
		background: rgb(16 138 100 / 0.85);
	}
	.an-st[data-k="在看"] {
		background: color-mix(in oklch, var(--primary) 88%, black);
	}
	.an-st[data-k="搁置"] {
		background: rgb(120 110 100 / 0.8);
	}
	.an-nm {
		margin-top: 7px;
		font-size: 0.8rem;
		font-weight: 600;
		color: var(--deep-text);
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.an-i:hover .an-nm {
		color: var(--primary);
	}
	.an-sub {
		margin-top: 1px;
		font-size: 0.7rem;
		color: var(--content-meta);
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.an-bar {
		margin-top: 5px;
		height: 3px;
		border-radius: 2px;
		background: var(--btn-regular-bg);
		overflow: hidden;
	}
	.an-bar i {
		display: block;
		height: 100%;
		border-radius: 2px;
		background: var(--primary);
	}
	.an-bar-t {
		margin-top: 3px;
		font-size: 0.66rem;
		color: var(--content-meta);
		font-variant-numeric: tabular-nums;
	}
	.an-empty {
		padding: 40px 0;
		text-align: center;
		font-size: 0.85rem;
		color: var(--content-meta);
	}
</style>
