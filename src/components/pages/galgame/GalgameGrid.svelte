<script lang="ts">
import { galgameStatuses } from "@/config/media";
import { ALL, countAll, countStatuses } from "@/utils/media-utils";
import MediaFilters from "../media/MediaFilters.svelte";

interface Game {
	slug: string;
	title: string;
	cn: string;
	alt: string;
	developer: string;
	year: string;
	cover: string;
	status: string;
	score: number | null;
}

interface Props {
	games: Game[];
}

let { games }: Props = $props();

let dev = $state(ALL);
let st = $state(ALL);

const rows = $derived([
	{
		key: "dev",
		label: "会社",
		items: countAll(games, (g) => g.developer || "其他"),
	},
	{
		key: "st",
		label: "状态",
		items: countStatuses(games, galgameStatuses, (g) => g.status),
	},
]);

const values = $derived({ dev, st });

function pick(key: string, value: string) {
	if (key === "dev") dev = value;
	else if (key === "st") st = value;
}

const list = $derived(
	games.filter((g) => {
		if (dev !== ALL && (g.developer || "其他") !== dev) return false;
		if (st !== ALL && g.status !== st) return false;
		return true;
	}),
);
</script>

<MediaFilters {rows} {values} onpick={pick} />

{#if list.length}
	<div class="mg-grid">
		{#each list as g (g.slug)}
			<a class="mg-item" href={`/galgame/${g.slug}/`} title={g.cn || g.title}>
				<div class="mg-cv">
					{#if g.cover}
						<img src={g.cover} alt={g.cn || g.title} loading="lazy" referrerpolicy="no-referrer" />
					{/if}
					{#if g.score !== null}
						<span class="mg-badge-score">{g.score.toFixed(1)}</span>
					{/if}
					{#if g.status}
						<span class="mg-badge-state" data-k={g.status}>{g.status}</span>
					{/if}
				</div>
				<div class="mg-nm">{g.cn || g.title}</div>
				<div class="mg-sub">{[g.developer, g.year].filter(Boolean).join(" · ")}</div>
			</a>
		{/each}
	</div>
{:else}
	<p class="mg-empty">没有符合条件的作品。</p>
{/if}
