<script lang="ts">
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

<div class="mg-filters">
	{#each rows as row (row.key)}
		{#if row.items.length > 1}
			<div class="mg-row">
				<span class="mg-row-t">{row.label}</span>
				{#each row.items as [label, count] (label)}
					<button
						class="mg-chip"
						data-on={values[row.key] === label}
						onclick={() => onpick(row.key, label)}
					>
						{label}{#if count !== undefined}<span class="mg-chip-n">{count}</span>{/if}
					</button>
				{/each}
			</div>
		{/if}
	{/each}
</div>
