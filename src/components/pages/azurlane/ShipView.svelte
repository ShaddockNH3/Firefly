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
		owned?: boolean;
	}

	interface Props {
		ship: { n: string; f: string; t: string; r: string; i: string; av: string; g?: string };
		info: {
			art?: string;
			refit?: string;
			oath?: string;
			tch?: { u: number; m: number; l: number; ub?: string; lb?: string } | null;
			cp?: number;
			rt?: boolean;
		};
		skins: Skin[];
		owned?: boolean;
		have?: number;
		hasRecord?: boolean;
		maxed?: boolean;
	}

	let { ship, info, skins, owned = false, have = 0, hasRecord = false, maxed = false }: Props = $props();

	type Entry = { n: string; i: string; k: string; sub: string; owned: boolean };

	// 通常 → 各套换装 → 改造 → 誓约
	const entries = $derived<Entry[]>([
		{ n: "通常", i: info.art || ship.av, k: "", sub: "", owned: true },
		...skins.map((k) => ({
			n: k.n,
			i: k.i,
			k: k.k,
			sub: [k.th, k.y].filter(Boolean).join(" · "),
			owned: !!k.owned,
		})),
		...(info.refit ? [{ n: "改造", i: info.refit, k: "改造", sub: "", owned: true }] : []),
		...(info.oath ? [{ n: "誓约", i: info.oath, k: "誓约", sub: "", owned: false }] : []),
	]);

	const defIdx = $derived(entries.findIndex((e) => e.k === "改造"));

	let picked = $state<number | null>(null);
	const idx = $derived(picked ?? (defIdx >= 0 ? defIdx : 0));

	const skinCount = $derived(entries.length - 1);
	const ownedCount = $derived(entries.filter((e) => e.k !== "" && e.owned).length);

	// 联动船不参与战力复制
	const isLink = $derived(ship.g === "联动");
	const need = $derived(isLink ? 0 : info.cp && info.cp > 0 ? info.cp : 1);
	const tiers = ["0 破", "1 破", "2 破", "未改造", "满破"];
	const slots = $derived(info.rt ? [3, 0, 1, 2, 4] : [0, 1, 2, 4]);

	const spread = $derived.by(() => {
		const build = (n: number) => {
			const a = [0, 0, 0, 0, 0];
			let r = n;
			for (let k = slots.length - 1; k >= 0 && r > 0; k--) {
				a[slots[k]] = 1;
				r -= 1;
			}
			if (r > 0) a[4] += r;
			return a;
		};
		return { needA: build(need), haveA: build(Math.min(have, need)) };
	});

	const RAR: Record<string, string> = {
		普通: "#7c7f86",
		稀有: "#3c7fc0",
		精锐: "#7a4fc4",
		超稀有: "#a97c14",
		最高方案: "#a97c14",
		海上传奇: "#c03a70",
		决战方案: "#c03a70",
	};

	let track = $state<HTMLDivElement | null>(null);

	function scrollSkins(dir: number) {
		track?.scrollBy({ left: dir * 340, behavior: "smooth" });
	}
</script>

<div class="sp-wrap">
<div class="sp">
	<div class="sp-media">
		<img src={entries[idx].i} alt={ship.n} referrerpolicy="no-referrer" />
		<div class="sp-cap">{entries[idx].n}</div>
	</div>

	<div class="sp-info">
		<div class="sp-name">
			{ship.n}
			<span class="sp-rar" style={`color:${RAR[ship.r] ?? "#7c7f86"}`}>{ship.r}</span>
		</div>

		<div class="sp-meta">
			<span>{ship.f}</span><i></i><span>{ship.t}</span>
			{#if ship.i}<i></i><span>图鉴 {ship.i}</span>{/if}
			{#if ship.g !== "常规"}<i></i><span>{ship.g}</span>{/if}
			<a
				class="sp-wiki"
				href={`https://wiki.biligame.com/blhx/${encodeURIComponent(ship.n)}`}
				target="_blank"
				rel="noopener">wiki ↗</a
			>
			{#if hasRecord}
				<span class="sp-prog">
					<span data-on={owned}><i></i>已获得</span>
					<span data-on={maxed}><i></i>满星</span>
					<span data-on={maxed}><i></i>120 级</span>
				</span>
			{/if}
		</div>

		<div class="sp-block">
			<div class="sp-t">战力复制人</div>
			<div class="sp-mx">
				<span></span>
				{#each tiers as t, k (t)}<span class="sp-h" data-dim={slots.length === 4 && k === 3}>{t}</span>{/each}

				<span class="sp-rl">需要</span>
				{#each spread.needA as n, k (k)}
					<span class="sp-c" data-empty={n === 0}>{n === 0 ? "—" : n}</span>
				{/each}

				<span class="sp-rl">已有</span>
				{#each spread.haveA as n, k (k)}
					{#if !hasRecord || spread.needA[k] === 0}
						<span class="sp-c" data-empty="true">—</span>
					{:else}
						<span class="sp-c" data-gap={n < spread.needA[k]} data-ok={n >= spread.needA[k]}>{n}</span>
					{/if}
				{/each}
			</div>
			<div class="sp-note">
				{#if isLink}
					联动船 · 不计战力复制
				{:else}
					需要 {need} 只
					{#if hasRecord}
						· 已有 {have} 只
						{#if !maxed}
							· {#if have >= need}<span class="sp-done">已练齐</span>{:else}还差 {need - have} 只{/if}
						{/if}
					{:else}
						· <span style="opacity:.8">未记录</span>
					{/if}
				{/if}
			</div>
		</div>
	<div class="sp-skins">
		<div class="sp-skins-h">
			<b>换装</b>
			<span>共 {skinCount} 套{hasRecord ? ` · 已拥有 ${ownedCount}` : ""}</span>
			<div class="sp-nav">
				<button onclick={() => scrollSkins(-1)} aria-label="上一组">‹</button>
				<button onclick={() => scrollSkins(1)} aria-label="下一组">›</button>
			</div>
		</div>
		<div class="sp-track" bind:this={track}>
			{#each entries as e, i (e.n + i)}
				<button class="sp-sk" data-off={hasRecord && !e.owned} data-on={idx === i} onclick={() => (picked = i)}>
					<div class="sp-sk-cv">
						<img src={e.i} alt={e.n} loading="lazy" referrerpolicy="no-referrer" />
						{#if e.k === "L2D"}
							<span class="sp-badge l2d">L2D</span>
						{:else if e.k === "改造" || e.k === "誓约"}
							<span class="sp-badge">{e.k}</span>
						{/if}
						{#if hasRecord && !e.owned}
							<span class="sp-badge off">未拥有</span>
						{/if}
					</div>
					<div class="sp-sk-nm">{e.n}</div>
					<div class="sp-sk-sub">{e.sub || "—"}</div>
				</button>
			{/each}
		</div>
	</div>
	</div>
</div>

</div>

<style>
	.sp {
		display: flex;
		gap: 26px;
		align-items: flex-start;
	}
	.sp-media {
		width: clamp(240px, 38%, 340px);
		flex-shrink: 0;
		position: sticky;
		top: 90px;
	}
	.sp-media img {
		width: 100%;
		aspect-ratio: 2 / 3;
		object-fit: cover;
		display: block;
		border-radius: 14px;
		background: var(--card-bg);
		box-shadow: 0 2px 10px rgb(0 0 0 / 0.06);
	}
	.sp-cap {
		margin-top: 7px;
		text-align: center;
		font-size: 0.7rem;
		color: var(--content-meta);
	}
	.sp-info {
		flex: 1;
		min-width: 0;
	}
	.sp-name {
		display: flex;
		align-items: center;
		gap: 9px;
		font-size: 1.4rem;
		font-weight: 700;
		color: var(--deep-text);
	}
	.sp-rar {
		font-size: 0.68rem;
		font-weight: 800;
		padding: 1px 8px;
		border-radius: 6px;
		background: var(--btn-regular-bg);
	}
	.sp-meta {
		display: flex;
		align-items: center;
		gap: 10px;
		flex-wrap: wrap;
		margin-top: 6px;
		font-size: 0.8rem;
		color: var(--content-meta);
	}
	.sp-meta i {
		width: 3px;
		height: 3px;
		border-radius: 50%;
		background: currentColor;
		display: inline-block;
	}
	.sp-wiki {
		font-size: 0.74rem;
		color: var(--primary);
		text-decoration: none;
	}
	.sp-wiki:hover {
		text-decoration: underline;
	}
	.sp-prog {
		display: inline-flex;
		align-items: center;
		flex-wrap: wrap;
		gap: 14px;
		padding-left: 12px;
		border-left: 1px solid var(--line-divider);
		font-size: 0.74rem;
	}
	.sp-prog span {
		display: inline-flex;
		align-items: center;
		gap: 5px;
		white-space: nowrap;
	}
	.sp-prog i {
		width: 5px;
		height: 5px;
		border-radius: 50%;
		background: currentColor;
		opacity: 0.3;
		flex: none;
	}
	.sp-prog span[data-on="true"] {
		color: var(--deep-text);
	}
	.sp-prog span[data-on="true"] i {
		opacity: 1;
		background: #108a64;
	}
	.sp-block {
		margin-top: 16px;
		padding-top: 14px;
		border-top: 1px solid var(--line-divider);
	}
	.sp-t {
		font-size: 0.72rem;
		font-weight: 700;
		letter-spacing: 0.06em;
		color: var(--content-meta);
		opacity: 0.75;
		margin-bottom: 9px;
	}
	.sp-mx {
		display: grid;
		grid-template-columns: 34px repeat(5, minmax(0, 1fr));
		gap: 6px;
		align-items: center;
	}
	.sp-h {
		font-size: 0.64rem;
		color: var(--content-meta);
		text-align: center;
		padding-bottom: 2px;
		white-space: nowrap;
	}
	.sp-h[data-dim="true"] {
		opacity: 0.4;
	}
	.sp-rl {
		font-size: 0.7rem;
		color: var(--content-meta);
	}
	.sp-c {
		height: 30px;
		border-radius: 8px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 0.86rem;
		font-weight: 700;
		font-variant-numeric: tabular-nums;
		background: rgb(0 0 0 / 0.04);
		border: 1px solid transparent;
		color: var(--deep-text);
	}
	:global(.dark) .sp-c {
		background: rgb(255 255 255 / 0.07);
	}
	.sp-c[data-empty="true"] {
		background: transparent;
		color: var(--content-meta);
		opacity: 0.35;
	}
	.sp-c[data-ok="true"] {
		background: rgb(16 138 100 / 0.1);
		color: #0a7452;
	}
	.sp-c[data-gap="true"] {
		background: color-mix(in oklch, var(--primary) 12%, transparent);
		color: var(--primary);
	}
	:global(.dark) .sp-c[data-ok="true"] {
		color: #6ddbaa;
	}
	.sp-note {
		margin-top: 8px;
		font-size: 0.72rem;
		color: var(--content-meta);
	}
	.sp-done {
		color: #0a7452;
	}
	:global(.dark) .sp-done {
		color: #6ddbaa;
	}

	.sp-skins {
		margin-top: 22px;
	}
	.sp-skins-h {
		display: flex;
		align-items: center;
		gap: 8px;
		font-size: 0.86rem;
		color: var(--deep-text);
		margin-bottom: 12px;
	}
	.sp-skins-h b {
		font-weight: 700;
	}
	.sp-skins-h span {
		font-size: 0.74rem;
		font-weight: 500;
		color: var(--content-meta);
	}
	.sp-nav {
		margin-left: auto;
		display: flex;
		gap: 5px;
	}
	.sp-nav button {
		width: 24px;
		height: 24px;
		padding: 0;
		border-radius: 50%;
		border: 1px solid var(--line-divider);
		background: var(--card-bg);
		color: var(--content-meta);
		font-size: 14px;
		line-height: 1;
		cursor: pointer;
	}
	.sp-nav button:hover {
		color: var(--primary);
		border-color: var(--primary);
	}
	.sp-track {
		display: flex;
		gap: 12px;
		overflow-x: auto;
		padding: 2px 2px 6px;
		scroll-snap-type: x proximity;
		scrollbar-width: none;
	}
	.sp-track::-webkit-scrollbar {
		height: 0;
	}
	.sp-sk {
		flex: 0 0 146px;
		padding: 0;
		border: none;
		background: none;
		text-align: left;
		cursor: pointer;
		min-width: 0;
		scroll-snap-align: start;
	}
	.sp-sk-cv {
		position: relative;
		aspect-ratio: 3 / 4;
		border-radius: 14px;
		overflow: hidden;
		background: var(--card-bg);
		box-shadow: 0 1px 2px rgb(0 0 0 / 0.05);
		transition: outline-color 0.15s;
		outline: 2px solid transparent;
		outline-offset: 2px;
	}
	.sp-sk-cv img {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	.sp-sk[data-on="true"] .sp-sk-cv {
		outline-color: var(--primary);
	}
	.sp-sk[data-on="true"] .sp-sk-nm {
		color: var(--primary);
	}
	.sp-sk[data-off="true"] .sp-sk-cv {
		border: 1.5px dashed rgb(0 0 0 / 0.22);
	}
	.sp-sk[data-off="true"] .sp-sk-cv img {
		filter: saturate(0.5);
		opacity: 0.9;
	}
	.sp-badge {
		position: absolute;
		top: 6px;
		left: 6px;
		font-size: 0.58rem;
		font-weight: 800;
		padding: 1px 6px;
		border-radius: 5px;
		background: rgb(255 255 255 / 0.92);
		color: var(--primary);
		letter-spacing: 0.03em;
	}
	.sp-badge.l2d {
		color: #b8681f;
	}
	.sp-badge.off {
		left: auto;
		right: 6px;
		color: var(--content-meta);
		background: rgb(255 255 255 / 0.95);
		box-shadow: 0 1px 3px rgb(0 0 0 / 0.08);
	}
	.sp-sk-nm {
		margin-top: 6px;
		font-size: 0.78rem;
		font-weight: 600;
		color: var(--deep-text);
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.sp-sk-sub {
		font-size: 0.66rem;
		color: var(--content-meta);
		opacity: 0.85;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.sp-wrap {
		container-type: inline-size;
	}
	@container (max-width: 500px) {
		.sp {
			flex-direction: column;
			gap: 16px;
		}
		.sp-media {
			width: 100%;
			max-width: 340px;
			position: static;
		}
		.sp-mx {
			grid-template-columns: 30px repeat(5, minmax(0, 1fr));
		}
		.sp-prog {
			padding-left: 0;
			border-left: none;
			flex-basis: 100%;
		}
	}
</style>
