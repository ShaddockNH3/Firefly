import { SKIP, visit } from "unist-util-visit";

/**
 * 站点本地补丁：拦住 remark-directive 的误判。
 *
 * remark-directive 对指令名的匹配很宽松，正文里的 `19:00`、`4:1`、`5.5:1`
 * 会被拆成「文本 + `:00` 行内指令」，再被下游的 parseDirectiveNode 渲染成
 * `<00></00>`，页面上时间就变成了 `19<00>`。
 *
 * 指令名按规范必须以字母开头，所以首字符不是字母的一律还原成原文。
 * 放在 remarkDirective 之后、parseDirectiveNode 之前执行。
 */
const VALID_DIRECTIVE_NAME = /^[a-z][a-z0-9_-]*$/i;

function nodeToSource(node) {
	if (node.type === "text") return node.value ?? "";
	if (node.type === "inlineCode") return `\`${node.value ?? ""}\``;
	const children = (node.children ?? []).map(nodeToSource).join("");
	if (node.type === "emphasis") return `*${children}*`;
	if (node.type === "strong") return `**${children}**`;
	return children;
}

function directiveToText(node) {
	const name = node.name ?? "";
	const [first, ...rest] = node.children ?? [];
	const body =
		first?.data?.directiveLabel === true
			? `[${nodeToSource(first)}]${rest.map(nodeToSource).join("")}`
			: (node.children ?? []).map(nodeToSource).join("");
	return `:${name}${body}`;
}

export function remarkRestoreInvalidDirective() {
	return (tree) => {
		visit(tree, (node, index, parent) => {
			if (
				node.type !== "containerDirective" &&
				node.type !== "leafDirective" &&
				node.type !== "textDirective"
			) {
				return;
			}

			if (VALID_DIRECTIVE_NAME.test(node.name ?? "")) return;

			if (parent && typeof index === "number") {
				parent.children[index] = { type: "text", value: directiveToText(node) };
			}
			return SKIP;
		});
	};
}
