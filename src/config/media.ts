// 媒体列表（galgame / 小说 / 番剧 / 单机游戏）的状态词表与排序项
// 加一个状态或改一句文案，只改这里；筛选组件从配置读，不再写死在页面里

export type MediaSort = { key: string; label: string };

/** galgame：通关状态 */
export const galgameStatuses = ["已通关", "在玩", "想玩", "弃坑"] as const;

/** 小说：阅读状态 */
export const novelStatuses = ["在读", "读过", "想读", "弃坑"] as const;

/** 番剧：追番状态（搁置 / 抛弃 沿用番组计划的说法） */
export const animeStatuses = ["在看", "看过", "想看", "搁置", "抛弃"] as const;

/** 漫画：阅读状态（和番剧同一套词，界面上统一） */
export const mangaStatuses = ["在看", "看过", "想看", "搁置", "抛弃"] as const;

/** 单机游戏：预留，落地时直接用 */
export const gameStatuses = ["通关", "在玩", "想玩", "弃坑"] as const;

/** 小说排序项 */
export const novelSorts: MediaSort[] = [
	{ key: "act", label: "最近" },
	{ key: "score", label: "评分" },
	{ key: "title", label: "书名" },
];

/** 番剧排序项 */
export const animeSorts: MediaSort[] = [
	{ key: "recent", label: "最近" },
	{ key: "score", label: "我的评分" },
	{ key: "bgm", label: "Bangumi 评分" },
	{ key: "date", label: "放送" },
];

/** 漫画排序项（external 对应 sortMedia 里的外部评分，即 Bangumi） */
export const mangaSorts: MediaSort[] = [
	{ key: "recent", label: "最近" },
	{ key: "score", label: "我的评分" },
	{ key: "external", label: "Bangumi 评分" },
	{ key: "date", label: "连载" },
];

/** 单机游戏排序项 */
export const gameSorts: MediaSort[] = [
	{ key: "recent", label: "最近" },
	{ key: "score", label: "我的评分" },
	{ key: "year", label: "年份" },
	{ key: "difficulty", label: "难度" },
];
