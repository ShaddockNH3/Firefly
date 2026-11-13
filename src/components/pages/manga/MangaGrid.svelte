<script lang="ts">
import { mangaSorts, mangaStatuses } from "@/config/media";
import { ALL, countStatuses, sortMedia } from "@/utils/media-utils";
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
			<a class="mg-item" href={`/manga/${a.id}/`} title={a.cn}>
				<div class="mg-cv">
					{#if a.cover}
						<img src={a.cover} alt={a.cn} loading="lazy" referrerpolicy="no-referrer" />
					{:else}
						<span class="mg-cv-t"><span>{a.cn}</span></span>
					{/if}
					{#if a.score !== null}
						<span class="mg-badge-score">{a.score.toFixed(1)}</span>
					{/if}
					{#if a.status}
						<span class="mg-badge-state" data-k={a.status}>{a.status}</span>
					{/if}
				</div>
				<div class="mg-nm">{a.cn}</div>
				<div class="mg-sub">
					{[a.date.slice(0, 4), a.volumes ? `${a.volumes} 卷` : ""]
						.filter(Boolean)
						.join(" · ")}
				</div>
			</a>
		{/each}
	</div>
{:else}
	<p class="mg-empty">没有符合条件的作品。</p>
{/if}

<style>
	/* 没有封面时把书名排进卡面，当占位封用，不留一块空白 */
	.mg-cv-t {
		position: absolute;
		inset: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 16px 14px;
		text-align: center;
		font-size: 0.82rem;
		font-weight: 700;
		line-height: 1.65;
		letter-spacing: 0.02em;
		color: var(--deep-text);
		background: linear-gradient(
			160deg,
			color-mix(in oklch, var(--primary) 7%, var(--card-bg)) 0%,
			color-mix(in oklch, var(--primary) 18%, var(--card-bg)) 100%
		);
		word-break: break-word;
	}
	.mg-cv-t span {
		display: -webkit-box;
		-webkit-line-clamp: 6;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
</style>
