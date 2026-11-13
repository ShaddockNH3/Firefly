<script lang="ts">
import { mangaStatuses } from "@/config/media";
import { ALL, countAll, countStatuses } from "@/utils/media-utils";
import MediaFilters from "../media/MediaFilters.svelte";

interface Manga {
	slug: string;
	title: string;
	cn: string;
	alt: string;
	author: string;
	publisher: string;
	year: string;
	cover: string;
	status: string;
	score: number | null;
	volumes: number | null;
}

interface Props {
	items: Manga[];
}

let { items }: Props = $props();

let pub = $state(ALL);
let st = $state(ALL);

const rows = $derived([
	{
		key: "pub",
		label: "出版社",
		items: countAll(items, (g) => g.publisher || "其他"),
	},
	{
		key: "st",
		label: "状态",
		items: countStatuses(items, mangaStatuses, (g) => g.status),
	},
]);

const values = $derived({ pub, st });

function pick(key: string, value: string) {
	if (key === "pub") pub = value;
	else if (key === "st") st = value;
}

const list = $derived(
	items.filter((g) => {
		if (pub !== ALL && (g.publisher || "其他") !== pub) return false;
		if (st !== ALL && g.status !== st) return false;
		return true;
	}),
);
</script>

<MediaFilters {rows} {values} onpick={pick} />

{#if list.length}
	<div class="mg-grid">
		{#each list as g (g.slug)}
			<a class="mg-item" href={`/manga/${g.slug}/`} title={g.cn || g.title}>
				<div class="mg-cv">
					{#if g.cover}
						<img src={g.cover} alt={g.cn || g.title} loading="lazy" referrerpolicy="no-referrer" />
					{:else}
						<span class="mg-cv-t"><span>{g.cn || g.title}</span></span>
					{/if}
					{#if g.score !== null}
						<span class="mg-badge-score">{g.score.toFixed(1)}</span>
					{/if}
					{#if g.status}
						<span class="mg-badge-state" data-k={g.status}>{g.status}</span>
					{/if}
				</div>
				<div class="mg-nm">{g.cn || g.title}</div>
				<div class="mg-sub">
					{[g.author || g.publisher, g.year].filter(Boolean).join(" · ")}
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
