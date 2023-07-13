/*
 * @lc app=leetcode.cn id=1299 lang=javascript
 *
 * [1299] 将每个元素替换为右侧最大元素
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
  const result = []

  for (let i = 0; i < arr.length; i++) {
    const rightArr = arr.slice(i + 1)
    const max = rightArr.length ? Math.max(...rightArr) : -1
    result.push(max)
  }

  return result
};

var replaceElements = function (arr) {
  // 最右侧的元素最大替换值为-1
  let rightMax = -1
  for (let i = arr.length - 1; i >= 0; i--) {
    const newMax = Math.max(rightMax, arr[i])
    arr[i] = rightMax
    rightMax = newMax
  }

  return arr
}
// @lc code=end

