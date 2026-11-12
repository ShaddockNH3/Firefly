<script lang="ts">
	interface Skin {
		s: string;
		n: string;
		k: string;
		th: string;
		y: string;
		d: string;
		p: string;
		i: string;
	}

	interface Props {
		skins: Skin[];
		owned?: string[];
		perPage?: number;
	}

	let { skins, owned = [], perPage = 60 }: Props = $props();

	const ownSet = $derived(new Set(owned));
	const hasRecord = $derived(owned.length > 0);

	function hash(str: string) {
		let h = 2166136261;
		for (let i = 0; i < str.length; i++) {
			h ^= str.charCodeAt(i);
			h = Math.imul(h, 16777619);
		}
		return h >>> 0;
	}

	// 固定打散：同一个名字永远落在同一个位置
	const shuffled = $derived(
		[...skins].sort((a, b) => hash(a.n + a.s) - hash(b.n + b.s)),
	);

	let filter = $state("全部");
	let page = $state(1);

	const filtered = $derived.by(() => {
		let list = shuffled;
		if (filter === "已拥有") list = list.filter((k) => ownSet.has(k.n));
		else if (filter === "未拥有") list = list.filter((k) => !ownSet.has(k.n));
		else if (filter === "L2D") list = list.filter((k) => k.k === "L2D");

		if (filter !== "全部") {
			list = [...list].sort((a, b) => a.n.localeCompare(b.n, "zh"));
		}
		return list;
	});

	const pages = $derived(Math.max(1, Math.ceil(filtered.length / perPage)));
	const view = $derived(filtered.slice((page - 1) * perPage, page * perPage));

	const tabs = $derived(
		hasRecord ? ["全部", "已拥有", "未拥有", "L2D"] : ["全部", "L2D"],
	);

	let opened = $state<Skin | null>(null);

	function setFilter(k: string) {
		filter = k;
		page = 1;
	}
</script>

<div class="sw-bar">
	<div class="al-row">
		{#each tabs as k (k)}
			<button class="al-chip" data-on={filter === k} onclick={() => setFilter(k)}>{k}</button>
		{/each}
		<span class="sw-count">{filtered.length} 套</span>
	</div>
</div>

<div class="sw-grid">
	{#each view as k (k.i)}
		<button class="sw-i" onclick={() => (opened = k)} title={k.n}>
			<div class="sw-cv" data-off={hasRecord && !ownSet.has(k.n)}>
				<img src={k.i} alt={k.n} loading="lazy" referrerpolicy="no-referrer" />
				{#if k.k === "L2D"}<span class="sw-l2d">L2D</span>{/if}
			</div>
			<div class="sw-nm">{k.n}</div>
			<div class="sw-sub">{[k.s, k.th, k.y].filter(Boolean).join(" · ")}</div>
		</button>
	{/each}
</div>

{#if pages > 1}
	<div class="al-pager">
		<button disabled={page === 1} onclick={() => (page -= 1)}>上一页</button>
		<span>{page} / {pages}</span>
		<button disabled={page === pages} onclick={() => (page += 1)}>下一页</button>
	</div>
{/if}

{#if opened}
	<div class="sw-modal" role="presentation" onclick={(e) => e.target === e.currentTarget && (opened = null)}>
		<div class="sw-box">
			<img src={opened.i} alt={opened.n} referrerpolicy="no-referrer" />
			<div class="sw-info">
				<div class="sw-title">{opened.n}</div>
				<div class="sw-by">{opened.s} · {opened.k}</div>
				<div class="sw-rows">
					<div><span>主题</span><b>{opened.th || "—"}</b></div>
					<div><span>原价</span><b>{opened.p ? `${opened.p} 钻石` : "—"}</b></div>
					<div><span>实装</span><b>{opened.d || "—"}</b></div>
				</div>
			</div>
		</div>
	</div>
{/if}

<style>
	.sw-bar {
		display: flex;
		align-items: center;
		gap: 10px;
		margin-bottom: 14px;
	}
	.al-row {
		display: flex;
		align-items: center;
		gap: 6px;
		flex-wrap: wrap;
	}
	.al-chip {
		padding: 5px 12px;
		border-radius: 999px;
		font-size: 0.78rem;
		color: var(--content-meta);
		background: var(--card-bg);
		border: 1px solid var(--line-divider);
		cursor: pointer;
	}
	.al-chip:hover { background: var(--btn-regular-bg); }
	.al-chip[data-on="true"] {
		background: var(--primary);
		border-color: transparent;
		color: #fff;
	}
	.sw-count {
		margin-left: auto;
		font-size: 0.74rem;
		color: var(--content-meta);
		opacity: 0.8;
	}

	.sw-grid {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 12px;
	}
	@media (min-width: 640px) {
		.sw-grid { grid-template-columns: repeat(4, minmax(0, 1fr)); }
	}
	@media (min-width: 1024px) {
		.sw-grid { grid-template-columns: repeat(6, minmax(0, 1fr)); }
	}
	.sw-i {
		display: block;
		text-align: left;
		padding: 0;
		border: none;
		background: none;
		cursor: pointer;
		min-width: 0;
	}
	.sw-cv {
		position: relative;
		aspect-ratio: 3 / 4;
		border-radius: 12px;
		overflow: hidden;
		background: var(--card-bg);
		box-shadow: 0 1px 2px rgb(0 0 0 / 0.05);
		transition: transform 0.18s, box-shadow 0.18s;
	}
	.sw-cv img {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	.sw-i:hover .sw-cv {
		transform: translateY(-2px);
		box-shadow: 0 8px 20px rgb(0 0 0 / 0.1);
	}
	.sw-cv[data-off="true"] {
		border: 1px dashed rgb(0 0 0 / 0.22);
	}
	.sw-cv[data-off="true"] img {
		filter: grayscale(1);
		opacity: 0.5;
	}
	.sw-l2d {
		position: absolute;
		left: 7px;
		bottom: 7px;
		font-size: 0.6rem;
		font-weight: 800;
		letter-spacing: 0.04em;
		padding: 1px 6px;
		border-radius: 5px;
		background: rgb(255 255 255 / 0.9);
		color: #b8681f;
	}
	.sw-nm {
		margin-top: 6px;
		font-size: 0.78rem;
		font-weight: 600;
		color: var(--deep-text);
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.sw-sub {
		font-size: 0.68rem;
		color: var(--content-meta);
		opacity: 0.85;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
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
	.al-pager button:disabled { opacity: 0.4; cursor: default; }

	.sw-modal {
		position: fixed;
		inset: 0;
		z-index: 90;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 24px;
		background: rgb(20 20 26 / 0.55);
		backdrop-filter: blur(6px);
	}
	.sw-box {
		display: flex;
		gap: 26px;
		padding: 20px;
		max-width: min(800px, 100%);
		border-radius: 18px;
		background: var(--card-bg);
	}
	.sw-box > img {
		width: 340px;
		max-width: 45vw;
		border-radius: 14px;
		display: block;
		box-shadow: 0 4px 18px rgb(0 0 0 / 0.1);
	}
	.sw-info {
		width: 280px;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.sw-title {
		font-size: 1.2rem;
		font-weight: 700;
		color: var(--deep-text);
		letter-spacing: -0.01em;
	}
	.sw-by {
		margin-top: 5px;
		font-size: 0.79rem;
		color: var(--content-meta);
	}
	.sw-rows {
		margin-top: 18px;
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
	.sw-rows div {
		display: flex;
		align-items: baseline;
		font-size: 0.79rem;
		color: var(--content-meta);
		padding-bottom: 9px;
		border-bottom: 1px solid var(--line-divider);
	}
	.sw-rows div:last-child { border-bottom: none; }
	.sw-rows b {
		margin-left: auto;
		color: var(--deep-text);
		font-weight: 650;
	}
</style>
