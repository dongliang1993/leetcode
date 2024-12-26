/*
 * @lc app=leetcode.cn id=2956 lang=javascript
 *
 * [2956] 找到两个数组中的公共元素
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var findIntersectionValues = function (nums1, nums2) {
  const result = [0, 0]
  const nums1Map = new Map([])
  const nums2Map = new Map([])

  // 统计 nums1 中的频次
  for (const num of nums1) {
    nums1Map.set(num, (nums1Map.get(num) || 0) + 1)
  }

  for (const num of nums2) {
    nums2Map.set(num, (nums2Map.get(num) || 0) + 1)
  }

  nums1Map.forEach((value, key) => {
    if (nums2Map.has(key)) {
      result[0] = result[0] + value
    }
  })

  nums2Map.forEach((value, key) => {
    if (nums1Map.has(key)) {
      result[1] = result[1] + value
    }
  })

  return result
};
// @lc code=end

