<script lang="ts">
import Icon from "@/components/common/Icon.svelte";
import MediaFilters from "../media/MediaFilters.svelte";

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
const rarities = [
	"全部",
	"海上传奇",
	"决战方案",
	"最高方案",
	"超稀有",
	"精锐",
	"稀有",
	"普通",
];
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

// 图鉴顺序：特殊（布里三姐妹，001-003）置顶 → 常规+改造按图鉴号升序（两者共用一套编号）
// → 方案 → META → 联动。后三组在 wiki 里各自从 001 重新编号，只能整组排到后面
const GROUP_ORDER: Record<string, number> = {
	特殊: 0,
	常规: 1,
	改造: 1,
	方案: 2,
	META: 3,
	联动: 4,
};

const filtered = $derived(
	ships
		.filter((s) => {
			if (q && !s.n.includes(q.trim())) return false;
			if (st === "已拥有" && !ownSet.has(s.n)) return false;
			if (st === "未拥有" && ownSet.has(s.n)) return false;
			if (grp !== "全部" && s.g !== grp) return false;
			if (rar !== "全部" && s.r !== rar) return false;
			if (fac !== "全部" && s.f !== fac) return false;
			return true;
		})
		.sort((a, b) => {
			const ga = GROUP_ORDER[a.g] ?? 9;
			const gb = GROUP_ORDER[b.g] ?? 9;
			if (ga !== gb) return ga - gb;
			return (a.i || "").localeCompare(b.i || "");
		}),
);

const pages = $derived(Math.max(1, Math.ceil(filtered.length / perPage)));
const view = $derived(filtered.slice((page - 1) * perPage, page * perPage));

// 筛选行交给主题的 FilterControls（经 MediaFilters 包一层标签）
const frows = $derived([
	...(hasRecord
		? [
				{
					key: "st",
					label: "状态",
					items: [["全部"], ["已拥有"], ["未拥有"]] as [string][],
				},
			]
		: []),
	{
		key: "grp",
		label: "分组",
		items: groups.map((g) => [g.k, g.n] as [string, number]),
	},
	{ key: "rar", label: "稀有度", items: rarities.map((r) => [r] as [string]) },
	{ key: "fac", label: "阵营", items: factions.map((f) => [f] as [string]) },
]);
const fvalues = $derived({ st, grp, rar, fac });
function pickFilter(key: string, v: string) {
	pick((val) => {
		if (key === "st") st = val;
		else if (key === "grp") grp = val;
		else if (key === "rar") rar = val;
		else fac = val;
	}, v);
}

function pick(setter: (v: string) => void, v: string) {
	setter(v);
	page = 1;
}
</script>

<div class="al-filters">
	<label
		class="flex h-9 w-full max-w-60 items-center gap-2 rounded-full border border-(--line-divider) bg-(--card-bg) px-3 text-(--content-meta)"
	>
		<Icon icon="material-symbols:search" class="shrink-0 text-[1rem]" />
		<input
			type="search"
			class="w-full bg-transparent text-sm text-(--deep-text) outline-none placeholder:text-(--content-meta)"
			placeholder="搜舰船名"
			bind:value={q}
			oninput={() => (page = 1)}
		/>
	</label>

	<MediaFilters rows={frows} values={fvalues} onpick={pickFilter} />
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
