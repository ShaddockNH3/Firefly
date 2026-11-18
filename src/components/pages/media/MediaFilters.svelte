<script lang="ts">
// 筛选行：左边一行小标签（版本 / 状态 / 排序），右边是主题自带的 FilterControls。
// 以前这套是自写的 mg-chip，现在只做「标签 + 组件」的拼装，不新增样式。
import FilterControls from "@/components/common/FilterControls.svelte";

interface FilterRow {
	key: string;
	label: string;
	items: [string, number?][];
}

interface Props {
	rows: FilterRow[];
	values: Record<string, string>;
	onpick: (key: string, value: string) => void;
}

let { rows, values, onpick }: Props = $props();
</script>

<div class="mb-4 flex flex-col gap-3">
	{#each rows as row (row.key)}
		{#if row.items.length > 1}
			<div class="flex items-center gap-3">
				<span class="w-10 shrink-0 text-xs text-(--content-meta)">{row.label}</span>
				<!-- FilterControls 自带 mb-4，不清掉会把行高撑偏，标签和胶囊就不在同一中心线上 -->
				<div class="min-w-0 flex-1 [&>div]:mb-0">
					<FilterControls
						filters={row.items.map(([label, count]) => ({ value: label, label, count }))}
						activeFilter={values[row.key]}
						onFilterChange={(v) => onpick(row.key, v)}
					/>
				</div>
			</div>
		{/if}
	{/each}
</div>
