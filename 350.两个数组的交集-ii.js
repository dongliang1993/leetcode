/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  const freqMap = new Map()
  const result = []

  for (const num of nums1) {
    const count = freqMap.get(num) || 0
    freqMap.set(num, count + 1)
  }


  for (const num of nums2) {
    if (freqMap.get(num) > 0) {
      result.push(num)
      freqMap.set(num, freqMap.get(num) - 1)
    }
  }

  return result
}
// @lc code=end


// @after-stub-for-debug-begin
module.exports = intersect;
// @after-stub-for-debug-end