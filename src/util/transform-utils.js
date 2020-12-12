export default class TransformUtils {
    /**
     * 解析表格元素 - 怪物、物品
     * @param tableElement
     * @returns {{monster2Good: [], good2Monster: []}}
     */
    static parseTable(tableElement) {
        let table = tableElement;
        let rows = table.getElementsByTagName("tr");

        let monster2Good = [];
        let map = new Map([["", new Set()]]);
        map.delete("");
        let type = "普通";
        for (let i = 0; i < rows.length; i++) {
            let row = rows[i];
            let elements = row.getElementsByTagName("td");

            if (elements.length === 1) {
                type = "其他"
                if (elements[0].innerText.indexOf("封塔") !== -1) {
                    type = "封塔"
                }
            } else {
                let name = elements[0].innerText.trim();
                let goods = elements[1].innerText.trim();
                let goodArr = goods.split("、");

                // 怪物 -> 物品
                let json = {
                    name: name,
                    type: type,
                    goods: goods
                }
                monster2Good.push(json);

                // 物品 -> 怪物
                for (let j = 0; j < goodArr.length; j++) {
                    const good = goodArr[j];
                    const monster = {name: name, type: type};
                    // const monster = name + "(" + type + ")";
                    let v = map.get(good);
                    if (v) {
                        v.add(monster);
                    } else {
                        map.set(good, new Set([monster]));
                    }
                }
            }
        }

        let good2Monster = [];
        map.forEach((v, k) => {
            let monsters = [...v].map(monster => monster.name + "(" + monster.type + ")").join("、");
            let json = {good: k, monsters: monsters};
            good2Monster.push(json);
        });
        // console.log(good2Monster.slice(100, 105));
        return {monster2Good, good2Monster};
    }
}