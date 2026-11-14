// 单机游戏：一个游戏一个 tab，tab 里的条目是这个游戏的各种版本。
// 条目本身写在 src/content/games/<key>/<slug>.md，key 必须出现在这里，
// 否则构建时会直接报错，避免目录名打错导致条目静悄悄不显示。

export type GameMeta = {
	/** 目录名，也是 URL 段 */
	key: string;
	/** tab 上显示的名字 */
	name: string;
	/** 排序，小的在前 */
	order: number;
};

export const games: GameMeta[] = [
	{ key: "pvz", name: "植物大战僵尸", order: 10 },
	{ key: "mc", name: "我的世界", order: 20 },
	{ key: "kr", name: "王国保卫战", order: 30 },
	{ key: "plague", name: "瘟疫公司", order: 40 },
];

export const gameKeys = games.map((g) => g.key);

/** 第一个游戏单独占 /games/，其余走 /games/<key>/ */
export const firstGameKey = games[0].key;

export function isGameKey(key: string): boolean {
	return gameKeys.includes(key);
}

export function gameMeta(key: string): GameMeta | undefined {
	return games.find((g) => g.key === key);
}

/** 某个游戏的列表页地址 */
export function gameListHref(key: string): string {
	return key === firstGameKey ? "/games/" : `/games/${key}/`;
}

/** 顶部 tab 列表，直接丢给 PageTabs */
export function gameTabs(): { key: string; label: string; href: string }[] {
	return [...games]
		.sort((a, b) => a.order - b.order)
		.map((g) => ({ key: g.key, label: g.name, href: gameListHref(g.key) }));
}
