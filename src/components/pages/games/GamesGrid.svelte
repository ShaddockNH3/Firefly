<script lang="ts">
import { gameSorts, gameStatuses } from "@/config/media";
import { ALL, countStatuses, sortMedia } from "@/utils/media-utils";
import MediaCard from "../media/MediaCard.svelte";
import MediaFilters from "../media/MediaFilters.svelte";

interface Item {
	slug: string;
	title: string;
	kind: string;
	platform: string;
	year: string;
	difficulty: number;
	status: string;
	score: number | null;
	updated: string;
	cover: string;
}

interface Props {
	items: Item[];
	/** 详情页前缀，形如 /games/pvz/ —— 注意不是列表地址，第一个游戏的列表挂在 /games/ 上 */
	detailBase: string;
}

let { items, detailBase }: Props = $props();

let kind = $state(ALL);
let st = $state(ALL);
let sort = $state(gameSorts[0].key);

// 版本类型只有一种时（比如整个系列都是原版），这一行没有筛选意义，直接不给
const kindCounts = $derived.by(() => {
	const map = new Map<string, number>();
	for (const a of items) map.set(a.kind, (map.get(a.kind) ?? 0) + 1);
	return [...map.entries()];
});

const rows = $derived(
	[
		kindCounts.length > 1 && {
			key: "kind",
			label: "版本",
			items: [[ALL, items.length], ...kindCounts] as [string, number][],
		},
		{
			key: "st",
			label: "状态",
			items: countStatuses(items, gameStatuses, (a) => a.status),
		},
		{
			key: "sort",
			label: "排序",
			items: gameSorts.map((s) => [s.label] as [string]),
		},
	].filter(Boolean) as {
		key: string;
		label: string;
		items: [string, number?][];
	}[],
);

const sortLabel = $derived(
	gameSorts.find((s) => s.key === sort)?.label ?? gameSorts[0].label,
);
const values = $derived({ kind, st, sort: sortLabel });

function pick(key: string, value: string) {
	if (key === "kind") kind = value;
	else if (key === "st") st = value;
	else if (key === "sort")
		sort = gameSorts.find((s) => s.label === value)?.key ?? sort;
}

const list = $derived(
	sortMedia(
		items.filter(
			(a) =>
				(kind === ALL || a.kind === kind) && (st === ALL || a.status === st),
		),
		sort,
		{
			recent: (a) => a.updated,
			score: (a) => a.score,
			year: (a) => a.year,
			difficulty: (a) => a.difficulty,
		},
	),
);
</script>

{#if items.length > 1}
	<MediaFilters {rows} {values} onpick={pick} />
{/if}

{#if list.length}
	<div class="mg-grid">
		{#each list as a (a.slug)}
			<MediaCard
				href={`${detailBase}${a.slug}/`}
				title={a.title}
				sub={[a.kind, a.year, a.difficulty ? `难度 ${a.difficulty}` : ""]
					.filter(Boolean)
					.join(" · ")}
				cover={a.cover}
				score={a.score}
				status={a.status}
			/>
		{/each}
	</div>
{:else}
	<p class="mg-empty">这个组合下没有版本。</p>
{/if}
