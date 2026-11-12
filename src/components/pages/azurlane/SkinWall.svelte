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
		t?: string;
		full?: string;
	}

	interface Props {
		skins: Skin[];
		owned?: string[];
		perGroup?: number;
	}

	let { skins, owned = [], perGroup = 10 }: Props = $props();

	const ownSet = $derived(new Set(owned));
	const hasRecord = $derived(owned.length > 0);

	let own = $state("全部");
	let type = $state("全部");
	let q = $state("");
	let open = $state<string[]>([]);
	let zoom = $state<string | null>(null);
	let dlg = $state<HTMLDialogElement | null>(null);

	$effect(() => {
		if (zoom && dlg && !dlg.open) dlg.showModal();
		else if (!zoom && dlg?.open) dlg.close();
	});

	const LIMIT = perGroup;

	const matchOwn = (k: Skin) => {
		if (own === "已拥有") return ownSet.has(k.n);
		if (own === "未拥有") return !ownSet.has(k.n);
		return true;
	};

	const matchType = (k: Skin) => {
		if (type === "L2D") return k.k === "L2D";
		if (type === "改造") return k.k === "改造";
		if (type === "婚纱") return k.th === "誓约";
		return true;
	};

	const matchQ = (k: Skin) => {
		if (!q) return true;
		const s = q.toLowerCase();
		return k.n.toLowerCase().includes(s) || k.s.toLowerCase().includes(s);
	};

	const base = $derived(skins.filter((k) => matchType(k) && matchQ(k)));
	const list = $derived(base.filter(matchOwn));

	// 改造和婚纱固定排最后，其余按组内数量倒序
	const LAST: Record<string, number> = { 改造: 100, 誓约: 101 };

	const groups = $derived.by(() => {
		const m = new Map<string, Skin[]>();
		for (const k of list) {
			const g = k.th || "其他";
			if (!m.has(g)) m.set(g, []);
			m.get(g)!.push(k);
		}
		return [...m.entries()].sort((a, b) => {
			const ra = LAST[a[0]] ?? 0;
			const rb = LAST[b[0]] ?? 0;
			if (ra !== rb) return ra - rb;
			return b[1].length - a[1].length;
		});
	});

	const countOwn = $derived({
		all: base.length,
		yes: base.filter((k) => ownSet.has(k.n)).length,
	});

	const countType = $derived({
		l2d: skins.filter((k) => k.k === "L2D" && matchQ(k)).length,
		refit: skins.filter((k) => k.k === "改造" && matchQ(k)).length,
		oath: skins.filter((k) => k.th === "誓约" && matchQ(k)).length,
	});

	function setOwn(v: string) {
		own = v;
		open = [];
	}
	function setType(v: string) {
		type = v;
		open = [];
	}
	function toggle(th: string) {
		open = open.includes(th) ? open.filter((x) => x !== th) : [...open, th];
	}
</script>

<div class="sw-bar">
	<div class="sw-row">
		<span class="sw-lb">拥有</span>
		<button class="al-chip" data-on={own === "全部"} onclick={() => setOwn("全部")}>
			全部 <em>{countOwn.all}</em>
		</button>
		<button class="al-chip" data-on={own === "已拥有"} onclick={() => setOwn("已拥有")}>
			已拥有 <em>{countOwn.yes}</em>
		</button>
		<button class="al-chip" data-on={own === "未拥有"} onclick={() => setOwn("未拥有")}>
			未拥有 <em>{countOwn.all - countOwn.yes}</em>
		</button>
	</div>
	<div class="sw-row">
		<span class="sw-lb">类型</span>
		<button class="al-chip" data-on={type === "全部"} onclick={() => setType("全部")}>全部 <em>{skins.filter(matchQ).length}</em></button>
		<button class="al-chip" data-on={type === "L2D"} onclick={() => setType("L2D")}>
			L2D <em>{countType.l2d}</em>
		</button>
		<button class="al-chip" data-on={type === "改造"} onclick={() => setType("改造")}>
			改造 <em>{countType.refit}</em>
		</button>
		<button class="al-chip" data-on={type === "婚纱"} onclick={() => setType("婚纱")}>
			婚纱 <em>{countType.oath}</em>
		</button>
		<input class="sw-search" bind:value={q} placeholder="搜船名 / 皮肤名" />
	</div>
</div>

{#if hasRecord}
	<div class="sw-total">
		<span>已拥有 {owned.length} / {skins.length} 套</span>
		<span class="sw-pbar"><i style={`width:${((owned.length / skins.length) * 100).toFixed(1)}%`}></i></span>
	</div>
{/if}

{#if groups.length === 0}
	<p class="sw-empty">这个条件下没有皮肤。</p>
{/if}

{#each groups as [th, arr] (th)}
	<section class="sw-sec">
		<div class="sw-sec-h">
			<b>{th}</b>
			<span>{arr.length} 套</span>
			{#if hasRecord}
				<span class="sw-sec-own">已有 {arr.filter((k) => ownSet.has(k.n)).length}</span>
			{/if}
			{#if open.includes(th)}
				<button class="sw-collapse" onclick={() => toggle(th)}>收起 ↑</button>
			{/if}
		</div>
		<div class="sw-grid">
			{#each (open.includes(th) ? arr : arr.slice(0, LIMIT)) as k (k.i)}
				<div class="sw-i" title={k.n} onclick={() => (zoom = k.full || k.i)}>
					<div class="sw-cv" data-off={hasRecord && !ownSet.has(k.n)}>
						<img src={k.t || k.i} alt={k.n} loading="lazy" referrerpolicy="no-referrer" />
						{#if k.k === "L2D"}
							<span class="sw-tag l2d">L2D</span>
						{:else if k.k === "改造"}
							<span class="sw-tag refit">改造</span>
						{/if}
						{#if hasRecord && !ownSet.has(k.n)}
							<span class="sw-tag off">未拥有</span>
						{/if}
					</div>
					<div class="sw-nm">{k.n}</div>
					<div class="sw-sub">{[k.s, k.y].filter(Boolean).join(" · ")}</div>
				</div>
			{/each}
		</div>
		{#if arr.length > LIMIT}
			<button class="sw-more" onclick={() => toggle(th)}>
				{open.includes(th) ? "收起" : `展开全部 ${arr.length} 套`}
			</button>
		{/if}
	</section>
{/each}

<dialog bind:this={dlg} class="sw-zoom" onclick={() => (zoom = null)}>
	{#if zoom}<img src={zoom} alt="" referrerpolicy="no-referrer" />{/if}
</dialog>

<style>
	.sw-bar {
		display: flex;
		flex-direction: column;
		gap: 8px;
		margin-bottom: 16px;
	}
	.sw-row {
		display: flex;
		align-items: center;
		gap: 6px;
		flex-wrap: wrap;
	}
	.sw-lb {
		font-size: 0.72rem;
		color: var(--content-meta);
		min-width: 30px;
	}
	.al-chip {
		padding: 5px 12px;
		border-radius: 999px;
		font-size: 0.78rem;
		color: var(--content-meta);
		background: var(--card-bg);
		border: 1px solid var(--line-divider);
		cursor: pointer;
		font-family: inherit;
	}
	.al-chip:hover {
		background: var(--btn-regular-bg);
	}
	.al-chip[data-on="true"] {
		background: var(--primary);
		border-color: transparent;
		color: #fff;
	}
	.al-chip em {
		font-style: normal;
		font-size: 0.68rem;
		opacity: 0.6;
		margin-left: 2px;
		font-variant-numeric: tabular-nums;
	}
	.al-chip[data-on="true"] em {
		opacity: 0.85;
	}
	.sw-search {
		margin-left: auto;
		width: 160px;
		padding: 5px 12px;
		border-radius: 999px;
		border: 1px solid var(--line-divider);
		background: var(--card-bg);
		color: var(--deep-text);
		font-size: 0.76rem;
		font-family: inherit;
		outline: none;
	}
	.sw-search::placeholder {
		color: var(--content-meta);
	}

	.sw-total {
		display: flex;
		align-items: center;
		gap: 10px;
		margin-bottom: 18px;
		font-size: 0.74rem;
		color: var(--content-meta);
	}
	.sw-pbar {
		flex: 1;
		max-width: 180px;
		height: 4px;
		border-radius: 2px;
		background: var(--line-divider);
		overflow: hidden;
	}
	.sw-pbar i {
		display: block;
		height: 100%;
		background: var(--primary);
		border-radius: 2px;
	}

	.sw-empty {
		padding: 50px 0;
		text-align: center;
		font-size: 0.84rem;
		color: var(--content-meta);
	}

	.sw-sec {
		margin-bottom: 26px;
	}
	.sw-sec-h {
		display: flex;
		align-items: baseline;
		gap: 8px;
		padding-bottom: 7px;
		margin-bottom: 12px;
		border-bottom: 1px solid var(--line-divider);
		font-size: 0.84rem;
		color: var(--deep-text);
	}
	.sw-sec-h b {
		font-weight: 700;
	}
	.sw-sec-h span {
		font-size: 0.7rem;
		color: var(--content-meta);
	}
	.sw-sec-own {
		font-size: 0.7rem;
		color: var(--content-meta);
	}
	.sw-collapse {
		margin-left: auto;
		padding: 0;
		border: none;
		background: none;
		color: var(--content-meta);
		font-size: 0.72rem;
		font-family: inherit;
		cursor: pointer;
		flex: none;
		opacity: 0.75;
		transition: opacity 0.15s, color 0.15s;
	}
	.sw-collapse:hover {
		color: var(--primary);
		opacity: 1;
	}


	.sw-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(138px, 1fr));
		gap: 16px 12px;
	}
	@media (max-width: 480px) {
		.sw-grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
			gap: 14px 10px;
		}
		.sw-search {
			margin-left: 0;
			width: 100%;
		}
	}
	.sw-zoom {
		position: fixed;
		inset: 0;
		width: 100vw;
		height: 100vh;
		max-width: none;
		max-height: none;
		margin: 0;
		padding: 24px;
		border: none;
		background: rgb(0 0 0 / 0.86);
		cursor: zoom-out;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.sw-zoom::backdrop {
		background: rgb(0 0 0 / 0.5);
	}
	.sw-zoom img {
		height: 88vh;
		width: auto;
		max-width: 90vw;
		object-fit: contain;
		border-radius: 10px;
		box-shadow: 0 12px 48px rgb(0 0 0 / 0.4);
	}
	.sw-i {
		display: block;
		cursor: zoom-in;
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
		border-radius: 14px;
		overflow: hidden;
		background: #f1f1f5;
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
		border: 1.5px dashed rgb(0 0 0 / 0.22);
	}
	.sw-cv[data-off="true"] img {
		filter: saturate(0.5);
		opacity: 0.9;
	}
	.sw-tag {
		position: absolute;
		top: 6px;
		font-size: 0.6rem;
		font-weight: 700;
		padding: 1px 6px;
		border-radius: 5px;
		letter-spacing: 0.02em;
	}
	.sw-tag.l2d {
		left: 6px;
		background: rgb(255 255 255 / 0.92);
		color: #b8681f;
	}
	.sw-tag.refit {
		left: 6px;
		background: rgb(255 255 255 / 0.92);
		color: #3c7fc0;
	}
	.sw-tag.off {
		right: 6px;
		background: rgb(255 255 255 / 0.95);
		color: var(--content-meta);
		box-shadow: 0 1px 3px rgb(0 0 0 / 0.08);
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
	.sw-more {
		display: block;
		width: 100%;
		margin-top: 12px;
		padding: 8px;
		border-radius: 10px;
		border: 1px dashed var(--line-divider);
		background: transparent;
		color: var(--content-meta);
		font-size: 0.76rem;
		font-family: inherit;
		cursor: pointer;
	}
	.sw-more:hover {
		color: var(--primary);
		border-color: var(--primary);
	}
</style>
