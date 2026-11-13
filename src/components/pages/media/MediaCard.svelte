<script lang="ts">
interface Props {
	href: string;
	title: string;
	sub: string;
	cover: string;
	score?: number | null;
	status?: string;
	/** 有进度条时传当前集数/总集数，例如番剧的在看 */
	progress?: { cur: number; total: number } | null;
	onclick?: (e: MouseEvent) => void;
}

let {
	href,
	title,
	sub,
	cover,
	score = null,
	status = "",
	progress = null,
	onclick,
}: Props = $props();
</script>

<a class="mg-item" {href} title={title} {onclick}>
	<div class="mg-cv">
		{#if cover}
			<img src={cover} alt={title} loading="lazy" referrerpolicy="no-referrer" />
		{:else}
			<!-- 没有封面时把书名排进卡面，当占位封用，不留一块空白 -->
			<span class="mg-cv-t"><span>{title}</span></span>
		{/if}
		{#if score !== null && score !== undefined}
			<span class="mg-badge-score">{score.toFixed(1)}</span>
		{/if}
		{#if status}
			<span class="mg-badge-state" data-k={status}>{status}</span>
		{/if}
	</div>
	<div class="mg-nm">{title}</div>
	<div class="mg-sub">{sub}</div>
	{#if progress && progress.total > 0}
		<div class="mg-bar">
			<i
				style={`width:${Math.min(100, Math.round((progress.cur / progress.total) * 100))}%`}
			></i>
		</div>
		<div class="mg-bar-t">{progress.cur} / {progress.total}</div>
	{/if}
</a>
