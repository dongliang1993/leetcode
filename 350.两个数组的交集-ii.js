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
  const numMap = new Map()
  const result = []

  // 遍历 nums1 数组，记录每个元素出现的次数
  for (let i = 0; i < nums1.length; i++) {
    const sum = numMap.get(nums1[i]) || 0
    numMap.set(nums1[i], sum + 1)
  }

  // 遍历 nums2 数组，检查对应元素在 numMap 中的出现次数
  for (let i = 0; i < nums2.length; i++) {
    if (numMap.has(nums2[i]) && numMap.get(nums2[i]) > 0) {
      result.push(nums2[i])
      numMap.set(nums2[i], numMap.get(nums2[i]) - 1)
    }
  }

  return result
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = intersect;
// @after-stub-for-debug-end