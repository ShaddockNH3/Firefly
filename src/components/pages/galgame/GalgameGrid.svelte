<script lang="ts">
	interface Game {
		slug: string;
		title: string;
		cn: string;
		alt: string;
		developer: string;
		year: string;
		cover: string;
		status: string;
		score: number | null;
	}

	interface Props {
		games: Game[];
	}

	let { games }: Props = $props();

	const ALL = "全部";
	const devs = $derived.by(() => {
		const m = new Map<string, number>();
		for (const g of games) {
			const d = g.developer || "其他";
			m.set(d, (m.get(d) ?? 0) + 1);
		}
		return [...m.entries()].sort((a, b) => b[1] - a[1]);
	});

	const statuses = ["已通关", "在玩", "想玩", "弃坑"];
	const hasStatus = $derived(games.some((g) => g.status));

	let dev = $state(ALL);
	let st = $state(ALL);

	const list = $derived(
		games.filter((g) => {
			if (dev !== ALL && (g.developer || "其他") !== dev) return false;
			if (st !== ALL && g.status !== st) return false;
			return true;
		}),
	);

	function pickDev(v: string) {
		dev = v;
	}
</script>

<div class="gl-filters">
	<div class="gl-row">
		<span class="gl-row-t">会社</span>
		<button class="gl-chip" data-on={dev === ALL} onclick={() => pickDev(ALL)}>
			{ALL}<span class="gl-chip-n">{games.length}</span>
		</button>
		{#each devs as [name, n] (name)}
			<button class="gl-chip" data-on={dev === name} onclick={() => pickDev(name)}>
				{name}<span class="gl-chip-n">{n}</span>
			</button>
		{/each}
	</div>

	{#if hasStatus}
		<div class="gl-row">
			<span class="gl-row-t">状态</span>
			<button class="gl-chip" data-on={st === ALL} onclick={() => (st = ALL)}>{ALL}</button>
			{#each statuses as k (k)}
				<button class="gl-chip" data-on={st === k} onclick={() => (st = k)}>{k}</button>
			{/each}
		</div>
	{/if}
</div>

{#if list.length}
	<div class="gl-grid">
		{#each list as g (g.slug)}
			<a class="gl-i" href={`/galgame/${g.slug}/`} title={g.cn || g.title}>
				<div class="gl-cv">
					{#if g.cover}
						<img src={g.cover} alt={g.cn || g.title} loading="lazy" referrerpolicy="no-referrer" />
					{/if}
					{#if g.score !== null}
						<span class="gl-score">{g.score.toFixed(1)}</span>
					{/if}
					{#if g.status}
						<span class="gl-st" data-k={g.status}>{g.status}</span>
					{/if}
				</div>
				<div class="gl-nm">{g.cn || g.title}</div>
				<div class="gl-sub">{[g.developer, g.year].filter(Boolean).join(" · ")}</div>
			</a>
		{/each}
	</div>
{:else}
	<p class="gl-empty">没有符合条件的作品。</p>
{/if}

<style>
	.gl-filters {
		display: flex;
		flex-direction: column;
		gap: 8px;
		margin-bottom: 16px;
	}
	.gl-row {
		display: flex;
		align-items: center;
		gap: 6px;
		flex-wrap: wrap;
		row-gap: 7px;
	}
	.gl-row-t {
		font-size: 0.72rem;
		color: var(--content-meta);
		min-width: 46px;
		white-space: nowrap;
		opacity: 0.75;
	}
	.gl-chip {
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
		transition: background 0.15s, color 0.15s, border-color 0.15s;
	}
	.gl-chip:hover {
		background: var(--btn-regular-bg);
	}
	.gl-chip[data-on="true"] {
		background: var(--primary);
		border-color: transparent;
		color: #fff;
	}
	.gl-chip-n {
		font-size: 0.68rem;
		opacity: 0.55;
	}
	.gl-chip[data-on="true"] .gl-chip-n {
		opacity: 0.8;
	}

	.gl-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
		gap: 16px 14px;
	}
	.gl-i {
		display: block;
		min-width: 0;
		text-decoration: none;
	}
	.gl-cv {
		position: relative;
		aspect-ratio: 2 / 3;
		border-radius: 12px;
		overflow: hidden;
		background: var(--btn-regular-bg);
		box-shadow: 0 1px 2px rgb(0 0 0 / 0.05);
		transition: transform 0.18s, box-shadow 0.18s;
	}
	.gl-i:hover .gl-cv {
		transform: translateY(-2px);
		box-shadow: 0 8px 20px rgb(0 0 0 / 0.12);
	}
	.gl-cv img {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	.gl-score {
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
	:global(.dark) .gl-score {
		background: rgb(0 0 0 / 0.55);
	}
	.gl-st {
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
	.gl-st[data-k="已通关"] {
		background: rgb(16 138 100 / 0.85);
	}
	.gl-st[data-k="在玩"] {
		background: color-mix(in oklch, var(--primary) 88%, black);
	}
	.gl-st[data-k="弃坑"] {
		background: rgb(0 0 0 / 0.42);
	}
	.gl-nm {
		margin-top: 6px;
		font-size: 0.8rem;
		font-weight: 600;
		color: var(--deep-text);
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.gl-i:hover .gl-nm {
		color: var(--primary);
	}
	.gl-sub {
		margin-top: 1px;
		font-size: 0.7rem;
		color: var(--content-meta);
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.gl-empty {
		padding: 40px 0;
		text-align: center;
		font-size: 0.85rem;
		color: var(--content-meta);
	}
</style>
