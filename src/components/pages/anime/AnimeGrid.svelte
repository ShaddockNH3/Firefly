<script lang="ts">
import { animeSorts, animeStatuses } from "@/config/media";
import { ALL, countAll, countStatuses, sortMedia } from "@/utils/media-utils";
import MediaFilters from "../media/MediaFilters.svelte";

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

let st = $state(ALL);
let tag = $state(ALL);
let sort = $state(animeSorts[0].key);

// 只收出现两次以上的标签，避免每个条目的标签都变成一枚 chip
const tagCounts = $derived.by(() => {
	const map = new Map<string, number>();
	for (const a of items)
		for (const t of a.tags) map.set(t, (map.get(t) ?? 0) + 1);
	return [
		[ALL, items.length],
		...[...map.entries()].filter(([, n]) => n >= 2),
	] as [string, number][];
});

const rows = $derived([
	{
		key: "st",
		label: "状态",
		items: countStatuses(items, animeStatuses, (a) => a.status),
	},
	{ key: "tag", label: "标签", items: tagCounts },
	{
		key: "sort",
		label: "排序",
		items: animeSorts.map((s) => [s.label] as [string]),
	},
]);

const sortLabel = $derived(
	animeSorts.find((s) => s.key === sort)?.label ?? animeSorts[0].label,
);
const values = $derived({ st, tag, sort: sortLabel });

function pick(key: string, value: string) {
	if (key === "st") st = value;
	else if (key === "tag") tag = value;
	else if (key === "sort")
		sort = animeSorts.find((s) => s.label === value)?.key ?? sort;
}

const list = $derived(
	sortMedia(
		items.filter(
			(a) =>
				(st === ALL || a.status === st) &&
				(tag === ALL || a.tags.includes(tag)),
		),
		sort,
		{
			recent: (a) => a.updated,
			score: (a) => a.score,
			external: (a) => a.bgmScore,
			date: (a) => a.date,
		},
	),
);
</script>

{#if items.length > 1}
	<MediaFilters {rows} {values} onpick={pick} />
{/if}

{#if list.length}
	<div class="mg-grid">
		{#each list as a (a.id)}
			<a class="mg-item" href={`/anime/${a.id}/`} title={a.cn}>
				<div class="mg-cv">
					{#if a.cover}
						<img src={a.cover} alt={a.cn} loading="lazy" referrerpolicy="no-referrer" />
					{/if}
					{#if a.score !== null}
						<span class="mg-badge-score">{a.score.toFixed(1)}</span>
					{/if}
					{#if a.status}
						<span class="mg-badge-state" data-k={a.status}>{a.status}</span>
					{/if}
				</div>
				<div class="mg-nm">{a.cn}</div>
				<div class="mg-sub">{[a.date.slice(0, 4), a.eps ? `${a.eps} 集` : ""].filter(Boolean).join(" · ")}</div>
				{#if a.status === "在看" && a.ep > 0 && a.eps > 0}
					<div class="mg-bar"><i style={`width:${Math.min(100, Math.round((a.ep / a.eps) * 100))}%`}></i></div>
					<div class="mg-bar-t">{a.ep} / {a.eps}</div>
				{/if}
			</a>
		{/each}
	</div>
{:else}
	<p class="mg-empty">还没有收藏的番剧。</p>
{/if}
