// 换装列表：皮肤库（skins.json）＋ 改造立绘
//
// 改造立绘不在皮肤库里 —— 它在 detail.json 的 refit 字段（舰船页用的那张），
// 换装页要把它当成「船名·改」的条目显示，所以在这里拼一次，档案页和换装页共用同一份。
import detailData from "@/data/azurlane/detail.json";
import shipsData from "@/data/azurlane/ships.json";
import skinsData from "@/data/azurlane/skins.json";

export interface Skin {
	/** 归属船 */
	s: string;
	/** 皮肤名 */
	n: string;
	/** 静态 / L2D / 改造 */
	k: string;
	/** 系列 */
	th: string;
	y: string;
	d: string;
	p: string;
	/** 立绘地址（原图，角色页/大图用） */
	i: string;
	/** 缩略图（400px，换装墙用；原图本身就不大的话跟 i 相同） */
	t?: string;
}

const refitArt = detailData as Record<string, { refit?: string; refitThumb?: string }>;

export const refitSkins: Skin[] = (shipsData as { n: string; g: string }[])
	.filter((s) => s.g === "改造" && refitArt[s.n]?.refit)
	.map((s) => ({
		s: s.n,
		n: `${s.n}·改`,
		k: "改造",
		th: "改造",
		y: "",
		d: "",
		p: "",
		i: refitArt[s.n].refit as string,
		t: refitArt[s.n].refitThumb || (refitArt[s.n].refit as string),
	}));

export const allSkins: Skin[] = [...(skinsData as Skin[]), ...refitSkins];
