// 媒体列表共用的计数与排序工具
// 三个页面（小说 / 番剧 / 以后的单机游戏）以前各写一份，逻辑一样，合并到这里

export const ALL = "全部";

/** 按某个字段分组计数，第一项固定是「全部」 */
export function countAll<T>(
	items: T[],
	pick: (item: T) => string,
): [string, number][] {
	const map = new Map<string, number>();
	for (const item of items) {
		const key = pick(item);
		if (!key) continue;
		map.set(key, (map.get(key) ?? 0) + 1);
	}
	return [[ALL, items.length], ...[...map.entries()]];
}

/** 状态计数：只保留有条目的状态，顺序按传入的词表 */
export function countStatuses<T>(
	items: T[],
	statuses: readonly string[],
	pick: (item: T) => string,
): [string, number][] {
	const counted = statuses
		.map(
			(s) =>
				[s, items.filter((item) => pick(item) === s).length] as [
					string,
					number,
				],
		)
		.filter(([, n]) => n > 0);
	return [[ALL, items.length], ...counted];
}

/** 排序用到的取值器，页面传自己有的字段 */
export type SortGetters<T> = {
	/** 最近动过的时间，倒序（默认排序） */
	recent?: (item: T) => string;
	/** 我的评分，倒序，未评排最后 */
	score?: (item: T) => number | null;
	/** 标题，按中文排序 */
	title?: (item: T) => string;
	/** 放送 / 发售日期，倒序 */
	date?: (item: T) => string;
	/** 站外评分（如 Bangumi），倒序 */
	external?: (item: T) => number | null;
};

export function sortMedia<T>(
	items: T[],
	mode: string,
	get: SortGetters<T>,
): T[] {
	const arr = [...items];
	const byStringDesc = (pick: (item: T) => string) => (a: T, b: T) =>
		(pick(b) || "").localeCompare(pick(a) || "");
	const byNumberDesc = (pick: (item: T) => number | null) => (a: T, b: T) =>
		(pick(b) ?? -1) - (pick(a) ?? -1);

	if (mode === "score" && get.score) arr.sort(byNumberDesc(get.score));
	else if (mode === "date" && get.date) arr.sort(byStringDesc(get.date));
	else if (mode === "title" && get.title)
		arr.sort(
			(a, b) => get.title?.(a).localeCompare(get.title?.(b) ?? "", "zh") ?? 0,
		);
	else if (mode === "external" && get.external)
		arr.sort(byNumberDesc(get.external));
	else if (get.recent) arr.sort(byStringDesc(get.recent));
	return arr;
}
