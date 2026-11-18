// 考研专题的配置。
// 系列名与分组顺序都放这里：改系列名不用翻页面代码，新增分组也不会被静默丢掉。
export const npeeSeries = "NPEE";

// 分组按这个顺序排；数据里出现了没列在这里的分组，会自动补在后面。
export const npeeTrackOrder = ["记录", "笔记", "错题本"];

// 没有填 track 的文章，统一归到这一组，排在最后
export const npeeUngrouped = "未分组";
