/*
 * @lc app=leetcode.cn id=1710 lang=javascript
 *
 * [1710] 卡车上的最大单元数
 */

// @lc code=start
/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
// 优先选择单元数量最多的箱子
var maximumUnits = function (boxTypes, truckSize) {
  // 按每个箱子的单元数量从大到小排序
  boxTypes.sort((a, b) => b[1] - a[1])

  let boxesLoaded = 0

  for (let i = 0; i < boxTypes.length; i++) {
    if (truckSize === 0) {
      break
    }

    const size = boxTypes[i][0]
    // 每种类型的箱子，我们检查是否可以全部装载：
    // 如果可以，我们将所有这种类型的箱子都装上，并更新 totalUnits 和 boxesLoaded。
    // 如果不能全部装载，我们装载剩余空间能容纳的箱子，然后退出循环（因为卡车已满）
    boxesLoaded = boxesLoaded + (truckSize >= size ? size : truckSize) * boxTypes[i][1]
    truckSize = truckSize >= size ? truckSize - size : 0
  };

  return boxesLoaded
}
// @lc code=end

