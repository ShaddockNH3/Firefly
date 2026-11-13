// 页面顶部 tab 的注册表。同一个 group 内的 tab 只在这里写一次，
// 各页传 group + active 即可，不要在页面里各抄一份数组。

export type PageTab = {
	key: string;
	label: string;
	href: string;
	badge?: string;
};

export const pageTabs = {
	manga: [
		{ key: "general", label: "一般向", href: "/manga/" },
		{ key: "adult", label: "成人向", href: "/manga/adult/", badge: "18+" },
	],
	azurlane: [
		{ key: "profile", label: "档案", href: "/azurlane/" },
		{ key: "dex", label: "图鉴", href: "/azurlane/dex/" },
		{ key: "skins", label: "换装", href: "/azurlane/skins/" },
	],
} satisfies Record<string, PageTab[]>;

export type PageTabGroup = keyof typeof pageTabs;
