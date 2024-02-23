/*
 * @lc app=leetcode.cn id=599 lang=javascript
 *
 * [599] 两个列表的最小索引总和
 */

// @lc code=start
/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
  const list1Map = new Map()
  let minIndexSum = Infinity
  const result = []

  for (let i = 0; i < list1.length; i++) {
    list1Map.set(list1[i], i)
  }

  for (let i = 0; i < list2.length; i++) {
    if (list1Map.has(list2[i])) {
      const indexSum = list1Map.get(list2[i]) + i;
      if (indexSum < minIndexSum) {
        // 如果找到更小的索引和，清空之前的结果数组
        result.length = 0;
        result.push(list2[i]);
        minIndexSum = indexSum
      } else if (indexSum === minIndexSum) {
        // 如果索引和与最小索引和相等，将当前餐厅添加到结果数组中
        result.push(list2[i]);
      }
    }
  }

  return result
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = findRestaurant;
// @after-stub-for-debug-end