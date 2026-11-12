import { defineCollection } from "astro:content";
import type { CollectionConfig } from "astro/content/config";
import { glob } from "astro/loaders";
import { type ZodType, z } from "astro/zod";

type PostData = {
	title: string;
	published: Date;
	updated?: Date;
	draft: boolean;
	description: string;
	image: string;
	tags: string[];
	category: string | null;
	lang: string;
	pinned: boolean;
	author: string;
	sourceLink: string;
	licenseName: string;
	licenseUrl: string;
	comment: boolean;
	password: string;
	passwordHint: string;
	series: string;
	seriesOrder?: number;
	prevTitle: string;
	prevSlug: string;
	nextTitle: string;
	nextSlug: string;
};

type DynamicData = {
	published: Date;
	pinned: boolean;
	location: string;
};

type ProjectLink = {
	label: string;
	icon: string;
	value: string;
};

type ProjectData = {
	title: string;
	published: Date;
	draft: boolean;
	order?: number;
	description: string;
	image: string;
	tags: string[];
	link: ProjectLink[];
	status: string;
	lang: string;
};

type GalgameData = {
	title: string;
	cn: string;
	alt: string;
	developer: string;
	released: string;
	cover: string;
	vndb: string;
	vndbRating: number | null;
	status: string;
	score: number | null;
	hours: number | null;
	finished: string;
	draft: boolean;
};

type NovelData = {
	title: string;
	author: string;
	platform: "fanqie" | "qidian" | "light";
	category: string;
	tags: string[];
	status: string;
	score: number | null;
	length: string;
	started: string;
	finished: string;
	updated: string;
	note: string;
	draft: boolean;
};

type ContentCollection<T> = CollectionConfig<
	ZodType<T>,
	ReturnType<typeof glob>
>;

const postsCollection: ContentCollection<PostData> = defineCollection({
	loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/posts" }),
	schema: z.object({
		title: z.string(),
		published: z.date(),
		updated: z.date().optional(),
		draft: z.boolean().optional().default(false),
		description: z.string().optional().default(""),
		image: z.string().optional().default(""),
		tags: z.array(z.string()).optional().default([]),
		category: z.string().optional().nullable().default(""),
		lang: z.string().optional().default(""),
		pinned: z.boolean().optional().default(false),
		author: z.string().optional().default(""),
		sourceLink: z.string().optional().default(""),
		licenseName: z.string().optional().default(""),
		licenseUrl: z.string().optional().default(""),
		comment: z.boolean().optional().default(true),
		password: z.string().optional().default(""),
		passwordHint: z.string().optional().default(""),
		series: z.string().optional().default(""),
		seriesOrder: z.number().optional(),

		/* For internal use */
		prevTitle: z.string().default(""),
		prevSlug: z.string().default(""),
		nextTitle: z.string().default(""),
		nextSlug: z.string().default(""),
	}),
});

const specCollection: ContentCollection<Record<string, never>> =
	defineCollection({
		loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/spec" }),
		schema: z.object({}),
	});

const dynamicCollection: ContentCollection<DynamicData> = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/dynamic" }),
	schema: z.object({
		published: z.date(),
		pinned: z.boolean().optional().default(false),
		location: z.string().optional().default(""),
	}),
});

const projectsCollection: ContentCollection<ProjectData> = defineCollection({
	loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
	schema: z.object({
		title: z.string(),
		published: z.date(),
		draft: z.boolean().optional().default(false),
		order: z.number().optional(),
		description: z.string().optional().default(""),
		image: z.string().optional().default(""),
		tags: z.array(z.string()).optional().default([]),
		link: z
			.array(
				z.object({
					label: z.string(),
					icon: z.string().optional().default(""),
					value: z.string(),
				}),
			)
			.optional()
			.default([]),
		status: z.string().optional().default(""),
		lang: z.string().optional().default(""),
	}),
});

const galgameCollection: ContentCollection<GalgameData> = defineCollection({
	loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/galgame" }),
	schema: z.object({
		title: z.string(),
		cn: z.string().optional().default(""),
		alt: z.string().optional().default(""),
		developer: z.string().optional().default(""),
		released: z.string().optional().default(""),
		cover: z.string().optional().default(""),
		vndb: z.string().optional().default(""),
		vndbRating: z.number().nullable().optional().default(null),
		// 已通关 / 在玩 / 想玩 / 弃坑，空表示还没记
		status: z.string().optional().default(""),
		score: z.number().nullable().optional().default(null),
		hours: z.number().nullable().optional().default(null),
		// 通关日期，空表示还没记
		finished: z.string().optional().default(""),
		draft: z.boolean().optional().default(false),
	}),
});

const novelsCollection: ContentCollection<NovelData> = defineCollection({
	loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/novels" }),
	schema: z.object({
		title: z.string(),
		author: z.string().optional().default(""),
		// 番茄 / 起点 / 轻小说
		platform: z.enum(["fanqie", "qidian", "light"]),
		// 分类自由填写，页面按出现过的值汇总成筛选项
		category: z.string().optional().default(""),
		tags: z.array(z.string()).optional().default([]),
		// 在读 / 读过 / 想读 / 弃坑，空表示还没记
		status: z.string().optional().default(""),
		score: z.number().nullable().optional().default(null),
		// 篇幅，网文写「470 万字」，轻小说写「18 卷」
		length: z.string().optional().default(""),
		started: z.string().optional().default(""),
		finished: z.string().optional().default(""),
		// 最近一次动过的时间，默认排序用
		updated: z.string().optional().default(""),
		// 列表里的一句话短评
		note: z.string().optional().default(""),
		draft: z.boolean().optional().default(false),
	}),
});

export const collections: {
	dynamic: typeof dynamicCollection;
	posts: typeof postsCollection;
	spec: typeof specCollection;
	projects: typeof projectsCollection;
	galgame: typeof galgameCollection;
	novels: typeof novelsCollection;
} = {
	dynamic: dynamicCollection,
	posts: postsCollection,
	spec: specCollection,
	projects: projectsCollection,
	galgame: galgameCollection,
	novels: novelsCollection,
};
