<script lang="ts">
import { mangaSorts, mangaStatuses } from "@/config/media";
import { ALL, countStatuses, sortMedia } from "@/utils/media-utils";
import MediaCard from "../media/MediaCard.svelte";
import MediaFilters from "../media/MediaFilters.svelte";

interface Item {
	id: number;
	cn: string;
	jp: string;
	cover: string;
	date: string;
	volumes: number;
	bgmScore: number | null;
	rank: number | null;
	tags: string[];
	status: string;
	score: number | null;
	read: string;
	updated: string;
}

interface Props {
	items: Item[];
}

let { items }: Props = $props();

let st = $state(ALL);
let tag = $state(ALL);
let sort = $state(mangaSorts[0].key);

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
		items: countStatuses(items, mangaStatuses, (a) => a.status),
	},
	{ key: "tag", label: "标签", items: tagCounts },
	{
		key: "sort",
		label: "排序",
		items: mangaSorts.map((s) => [s.label] as [string]),
	},
]);

const sortLabel = $derived(
	mangaSorts.find((s) => s.key === sort)?.label ?? mangaSorts[0].label,
);
const values = $derived({ st, tag, sort: sortLabel });

function pick(key: string, value: string) {
	if (key === "st") st = value;
	else if (key === "tag") tag = value;
	else if (key === "sort")
		sort = mangaSorts.find((s) => s.label === value)?.key ?? sort;
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
			<MediaCard
				href={`/manga/${a.id}/`}
				title={a.cn}
				sub={[a.date.slice(0, 4), a.volumes ? `${a.volumes} 卷` : ""]
					.filter(Boolean)
					.join(" · ")}
				cover={a.cover}
				score={a.score}
				status={a.status}
			/>
		{/each}
	</div>
{:else}
	<p class="mg-empty">没有符合条件的作品。</p>
{/if}

