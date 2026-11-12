#!/usr/bin/env python3
"""把「X改」并进「X」：可改造船只保留一条，按改造形态显示。

规则：
- 保留原名条目（图鉴编号用它），稀有度、头像用改造后的
- 标记 rt=True（可改造），分组改成「改造」
- 删除「X改」独立条目
- 「X改」名下的换装改挂到 X（目前没有，留个兜底）
"""
import json
from pathlib import Path

OUT = Path(__file__).resolve().parents[1] / "src/data/azurlane"

ships = json.loads((OUT / "ships.json").read_text(encoding="utf-8"))
detail = json.loads((OUT / "detail.json").read_text(encoding="utf-8"))
skins = json.loads((OUT / "skins.json").read_text(encoding="utf-8"))

names = {s["n"] for s in ships}
pairs = {n[:-1]: n for n in names if n.endswith("改") and n[:-1] in names}
print("可合并", len(pairs), "对")

by_name = {s["n"]: s for s in ships}
alt_skins = {}
for k in skins:
    if k["s"] in pairs.values():
        alt_skins.setdefault(k["s"], []).append(k)

for base, alt in pairs.items():
    b, a = by_name[base], by_name.get(alt)
    if not a:
        continue
    b["r"] = a["r"]           # 改造后稀有度变了
    b["av"] = a["av"] or b["av"]
    b["g"] = "改造"
    info = detail.setdefault(base, {})
    info["rt"] = True
    if not info.get("art"):
        info["art"] = detail.get(alt, {}).get("art", "")
    for k in alt_skins.get(alt, []):
        k["s"] = base

# 删掉 X改 条目
drop = set(pairs.values())
ships = [s for s in ships if s["n"] not in drop]
for n in drop:
    detail.pop(n, None)

(OUT / "ships.json").write_text(json.dumps(ships, ensure_ascii=False, separators=(",", ":")), encoding="utf-8")
(OUT / "detail.json").write_text(json.dumps(detail, ensure_ascii=False, separators=(",", ":")), encoding="utf-8")
(OUT / "skins.json").write_text(json.dumps(skins, ensure_ascii=False, separators=(",", ":")), encoding="utf-8")

from collections import Counter
print("船", len(ships), Counter(s["g"] for s in ships).most_common())
print("独角兽:", next(s for s in ships if s["n"] == "独角兽"))
print("换装", len(skins))
