<script lang="ts">
	interface Ship {
		i: string;
		n: string;
		f: string;
		t: string;
		r: string;
		g: string;
		av: string;
	}

	interface Props {
		ships: Ship[];
		owned?: string[];
		perPage?: number;
	}

	let { ships, owned = [], perPage = 96 }: Props = $props();

	const RARITY_COLOR: Record<string, string> = {
		普通: "#b9bec6",
		稀有: "#7fb3e8",
		精锐: "#b394e8",
		超稀有: "#e8c37f",
		海上传奇: "#f08fb8",
		最高方案: "#e8c37f",
		决战方案: "#f08fb8",
	};

	const ownSet = $derived(new Set(owned));
	const hasRecord = $derived(owned.length > 0);

	const groups = $derived(
		["全部", "常规", "改造", "方案", "META", "联动", "特殊"].map((k) => ({
			k,
			n: k === "全部" ? ships.length : ships.filter((s) => s.g === k).length,
		})),
	);
	const rarities = ["全部", "海上传奇", "决战方案", "最高方案", "超稀有", "精锐", "稀有", "普通"];
	const factions = $derived([
		"全部",
		...Array.from(new Set(ships.map((s) => s.f))),
	]);

	let q = $state("");
	let st = $state("全部");
	let grp = $state("全部");
	let rar = $state("全部");
	let fac = $state("全部");
	let page = $state(1);

	const filtered = $derived(
		ships.filter((s) => {
			if (q && !s.n.includes(q.trim())) return false;
			if (st === "已拥有" && !ownSet.has(s.n)) return false;
			if (st === "未拥有" && ownSet.has(s.n)) return false;
			if (grp !== "全部" && s.g !== grp) return false;
			if (rar !== "全部" && s.r !== rar) return false;
			if (fac !== "全部" && s.f !== fac) return false;
			return true;
		}),
	);

	const pages = $derived(Math.max(1, Math.ceil(filtered.length / perPage)));
	const view = $derived(filtered.slice((page - 1) * perPage, page * perPage));

	function pick(setter: (v: string) => void, v: string) {
		setter(v);
		page = 1;
	}
</script>

<div class="al-filters">
	<label class="al-search">
		<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path fill="currentColor" d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 1 0-.7.7l.27.28v.79l5 4.99L20.49 19zm-6 0A4.5 4.5 0 1 1 14 9.5A4.5 4.5 0 0 1 9.5 14"/></svg>
		<input type="search" placeholder="搜舰船名" bind:value={q} oninput={() => (page = 1)} />
	</label>

	{#if hasRecord}
		<div class="al-row">
			<span class="al-row-t">状态</span>
			{#each ["全部", "已拥有", "未拥有"] as k (k)}
				<button class="al-chip" data-on={st === k} onclick={() => pick((v) => (st = v), k)}>{k}</button>
			{/each}
		</div>
	{/if}

	<div class="al-row">
		<span class="al-row-t">分组</span>
		{#each groups as g (g.k)}
			<button class="al-chip" data-on={grp === g.k} onclick={() => pick((v) => (grp = v), g.k)}>
				{g.k}<span class="al-chip-n">{g.n}</span>
			</button>
		{/each}
	</div>

	<div class="al-row">
		<span class="al-row-t">稀有度</span>
		{#each rarities as k (k)}
			<button class="al-chip" data-on={rar === k} onclick={() => pick((v) => (rar = v), k)}>{k}</button>
		{/each}
	</div>

	<div class="al-row">
		<span class="al-row-t">阵营</span>
		{#each factions as k (k)}
			<button class="al-chip" data-on={fac === k} onclick={() => pick((v) => (fac = v), k)}>{k}</button>
		{/each}
	</div>
</div>

{#if view.length}
	<div class="al-dex">
		{#each view as s (s.n + s.i + s.r)}
			<a class="al-dex-i" href={`/azurlane/ship/${encodeURIComponent(s.n)}/`} title={s.n}>
				<div
					class="al-dex-cv"
					style={`border-color:${RARITY_COLOR[s.r] ?? "transparent"}`}
					data-off={hasRecord && !ownSet.has(s.n)}
				>
					<img src={s.av} alt={s.n} loading="lazy" referrerpolicy="no-referrer" />
				</div>
				<div class="al-dex-nm">{s.n}</div>
			</a>
		{/each}
	</div>

	{#if pages > 1}
		<div class="al-pager">
			<button disabled={page === 1} onclick={() => (page -= 1)}>上一页</button>
			<span>{page} / {pages}</span>
			<button disabled={page === pages} onclick={() => (page += 1)}>下一页</button>
		</div>
	{/if}
{:else}
	<p class="al-empty">没有符合条件的舰船。</p>
{/if}

<style>
	.al-filters {
		display: flex;
		flex-direction: column;
		gap: 8px;
		margin-bottom: 14px;
	}
	.al-search {
		display: flex;
		align-items: center;
		gap: 7px;
		height: 34px;
		width: min(100%, 240px);
		padding: 0 12px;
		border-radius: 999px;
		background: var(--card-bg);
		border: 1px solid var(--line-divider);
		color: var(--content-meta);
	}
	.al-search input {
		flex: 1;
		min-width: 0;
		border: none;
		outline: none;
		background: transparent;
		font-size: 0.8rem;
		color: var(--deep-text);
	}
	.al-row {
		display: flex;
		align-items: center;
		gap: 6px;
		flex-wrap: wrap;
		row-gap: 7px;
	}
	.al-row-t {
		font-size: 0.72rem;
		color: var(--content-meta);
		min-width: 46px;
		white-space: nowrap;
		opacity: 0.75;
	}
	.al-chip {
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
	.al-chip:hover {
		background: var(--btn-regular-bg);
	}
	.al-chip[data-on="true"] {
		background: var(--primary);
		border-color: transparent;
		color: white;
	}
	.al-chip-n {
		font-size: 0.68rem;
		opacity: 0.55;
	}
	.al-chip[data-on="true"] .al-chip-n {
		opacity: 0.8;
	}

	.al-dex {
		display: grid;
		grid-template-columns: repeat(4, minmax(0, 1fr));
		gap: 10px;
	}
	@media (min-width: 640px) {
		.al-dex { grid-template-columns: repeat(6, minmax(0, 1fr)); }
	}
	@media (min-width: 900px) {
		.al-dex { grid-template-columns: repeat(8, minmax(0, 1fr)); }
	}
	.al-dex-i {
		display: block;
		text-align: center;
		text-decoration: none;
		min-width: 0;
	}
	.al-dex-cv {
		position: relative;
		aspect-ratio: 1 / 1;
		border-radius: 12px;
		overflow: hidden;
		background: var(--card-bg);
		border: 2px solid transparent;
		box-shadow: 0 1px 2px rgb(0 0 0 / 0.05);
	}
	.al-dex-cv img {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	.al-dex-cv[data-off="true"] img {
		filter: grayscale(1);
		opacity: 0.4;
	}
	.al-dex-i:hover .al-dex-cv {
		transform: translateY(-2px);
		box-shadow: 0 6px 16px rgb(0 0 0 / 0.1);
	}
	.al-dex-cv {
		transition: transform 0.18s, box-shadow 0.18s;
	}
	.al-dex-nm {
		margin-top: 5px;
		font-size: 0.72rem;
		color: var(--deep-text);
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.al-dex-i:hover .al-dex-nm {
		color: var(--primary);
	}

	.al-pager {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 12px;
		margin-top: 18px;
		font-size: 0.78rem;
		color: var(--content-meta);
	}
	.al-pager button {
		padding: 5px 12px;
		border-radius: 999px;
		border: 1px solid var(--line-divider);
		background: var(--card-bg);
		color: var(--content-meta);
		cursor: pointer;
	}
	.al-pager button:disabled {
		opacity: 0.4;
		cursor: default;
	}
	.al-empty {
		padding: 40px 0;
		text-align: center;
		font-size: 0.85rem;
		color: var(--content-meta);
	}
</style>
