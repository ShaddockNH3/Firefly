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
		ship: { n: string; f: string; t: string; r: string; i: string; av: string };
		info: { art?: string; tch?: { u: number; m: number; l: number; ub?: string; lb?: string } | null; cp?: number; rt?: boolean };
		skins: Skin[];
		owned?: boolean;
		have?: number;
		hasRecord?: boolean;
	}

	let { ship, info, skins, owned = false, have = 0, hasRecord = false }: Props = $props();

	// -1 = 原始立绘
	let cur = $state(-1);

	const art = $derived(info.art || ship.av);
	const shown = $derived(cur >= 0 && skins[cur] ? skins[cur].i : art);
	const shownName = $derived(cur >= 0 && skins[cur] ? skins[cur].n : "原始立绘");

	const need = $derived(info.cp && info.cp > 0 ? info.cp : 1);
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

	const tech = $derived(info.tch ?? { u: 0, m: 0, l: 0 });
	const RAR: Record<string, string> = {
		普通: "#7c7f86",
		稀有: "#3c7fc0",
		精锐: "#7a4fc4",
		超稀有: "#a97c14",
		最高方案: "#a97c14",
		海上传奇: "#c03a70",
		决战方案: "#c03a70",
	};
</script>

<div class="sp">
	<div class="sp-media">
		<img src={shown} alt={ship.n} referrerpolicy="no-referrer" />
		<div class="sp-cap">{shownName}</div>
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
		</div>

		<div class="sp-block">
			<div class="sp-t">复制人</div>
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
				需要 {need} 只
				{#if hasRecord}
					· 已有 {have} 只 ·
					{#if have >= need}<span class="sp-done">已练齐</span>{:else}还差 {need - have} 只{/if}
				{:else}
					· <span class="sp-done" style="color:inherit;opacity:.8">未记录</span>
				{/if}
			</div>
		</div>

		<div class="sp-block">
			<div class="sp-t">科技点</div>
			<div class="sp-tech">
				<span>获得 <b>{tech.u}</b></span>
				<span>满星 <b>{tech.m}</b></span>
				<span>120 级 <b>{tech.l}</b></span>
			</div>
			{#if tech.ub || tech.lb}
				<div class="sp-note">{[tech.ub, tech.lb].filter(Boolean).join(" · ")}</div>
			{/if}
		</div>

		<div class="sp-block">
			<div class="sp-t">我的进度</div>
			{#if hasRecord}
				<div class="sp-dots">
					<span data-on={owned}>已获得</span>
					<span>满星</span>
					<span>120 级</span>
				</div>
			{:else}
				<div class="sp-note">未记录</div>
			{/if}
		</div>

		<a class="sp-wiki" href={`https://wiki.biligame.com/blhx/${encodeURIComponent(ship.n)}`} target="_blank" rel="noopener">
			在 wiki 查看
		</a>
	</div>
</div>

<div class="sp-skins">
	<div class="sp-skins-h">
		换装 <span>共 {skins.length} 套{hasRecord ? ` · 已拥有 ${skins.filter((k) => k.owned).length}` : ""}</span>
	</div>
	<div class="sp-grid">
		<button class="sp-sk" data-on={cur < 0} onclick={() => (cur = -1)}>
			<div class="sp-sk-cv">
				<img src={art} alt="原始立绘" loading="lazy" referrerpolicy="no-referrer" />
				<span class="sp-badge">默认</span>
			</div>
			<div class="sp-sk-nm">原始立绘</div>
			<div class="sp-sk-sub"></div>
		</button>

		{#each skins as k, idx (k.i)}
			<button class="sp-sk" data-off={hasRecord && !k.owned} data-on={cur === idx} onclick={() => (cur = idx)}>
				<div class="sp-sk-cv">
					<img src={k.i} alt={k.n} loading="lazy" referrerpolicy="no-referrer" />
					{#if k.k === "L2D"}<span class="sp-badge l2d">L2D</span>{/if}
				</div>
				<div class="sp-sk-nm">{k.n}</div>
				<div class="sp-sk-sub">{[k.th, k.y].filter(Boolean).join(" · ") || "—"}</div>
			</button>
		{/each}
	</div>
</div>

<style>
	.sp {
		display: flex;
		gap: 26px;
	}
	.sp-media {
		width: 250px;
		flex-shrink: 0;
	}
	.sp-media img {
		width: 100%;
		aspect-ratio: 3 / 4;
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
		margin-top: 5px;
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
		grid-template-columns: 38px repeat(5, minmax(46px, 66px));
		gap: 6px;
		align-items: center;
	}
	.sp-h {
		font-size: 0.68rem;
		color: var(--content-meta);
		text-align: center;
		padding-bottom: 2px;
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
	:global(.dark) .sp-c[data-ok="true"] { color: #6ddbaa; }
	.sp-note {
		margin-top: 8px;
		font-size: 0.72rem;
		color: var(--content-meta);
	}
	.sp-done { color: #0a7452; }
	:global(.dark) .sp-done { color: #6ddbaa; }
	.sp-tech {
		display: flex;
		gap: 18px;
		flex-wrap: wrap;
		font-size: 0.78rem;
		color: var(--content-meta);
	}
	.sp-tech b {
		color: var(--deep-text);
		font-weight: 700;
		font-size: 0.95rem;
		font-variant-numeric: tabular-nums;
	}
	.sp-dots {
		display: flex;
		gap: 18px;
		flex-wrap: wrap;
		font-size: 0.8rem;
		color: var(--content-meta);
		opacity: 0.55;
	}
	.sp-dots span {
		display: inline-flex;
		align-items: center;
		gap: 6px;
	}
	.sp-dots span::before {
		content: "";
		width: 6px;
		height: 6px;
		border-radius: 50%;
		border: 1px solid currentColor;
	}
	.sp-dots span[data-on="true"] {
		opacity: 1;
		color: var(--deep-text);
		font-weight: 600;
	}
	.sp-dots span[data-on="true"]::before {
		border-color: transparent;
		background: var(--primary);
	}
	.sp-wiki {
		display: inline-flex;
		align-items: center;
		margin-top: 14px;
		font-size: 0.76rem;
		color: var(--primary);
		text-decoration: none;
	}
	.sp-wiki:hover { text-decoration: underline; }

	.sp-skins { margin-top: 22px; }
	.sp-skins-h {
		display: flex;
		align-items: baseline;
		gap: 8px;
		font-size: 0.86rem;
		font-weight: 700;
		color: var(--deep-text);
		margin-bottom: 12px;
	}
	.sp-skins-h span {
		font-size: 0.74rem;
		font-weight: 500;
		color: var(--content-meta);
	}
	.sp-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(116px, 1fr));
		gap: 12px;
	}
	.sp-sk {
		padding: 0;
		border: none;
		background: none;
		text-align: left;
		cursor: pointer;
		min-width: 0;
	}
	.sp-sk-cv {
		position: relative;
		aspect-ratio: 3 / 4;
		border-radius: 12px;
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
		border: 1px dashed rgb(0 0 0 / 0.22);
	}
	.sp-sk[data-off="true"] .sp-sk-cv img {
		filter: grayscale(1);
		opacity: 0.5;
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
	.sp-badge.l2d { color: #b8681f; }
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

	@media (max-width: 640px) {
		.sp { flex-direction: column; gap: 16px; }
		.sp-media { width: 200px; }
		.sp-mx { grid-template-columns: 34px repeat(5, minmax(0, 1fr)); gap: 4px; }
	}
</style>
