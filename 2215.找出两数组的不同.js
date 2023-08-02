/*
 * @lc app=leetcode.cn id=2215 lang=javascript
 *
 * [2215] 找出两数组的不同
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
  const nums1Map = new Map();
  const nums2Map = new Map();
  for (let i = 0; i < nums1.length; i++) {
    nums1Map.set(nums1[i], nums1Map.has(nums1[i]) ? nums1Map.get(nums1[i]) + 1 : 1);
  }

  for (let i = 0; i < nums2.length; i++) {
    nums2Map.set(nums2[i], nums2Map.has(nums2[i]) ? nums2Map.get(nums2[i]) + 1 : 1);
  }
  return [
    [...nums1Map.keys()].filter(key => !nums2Map.has(key)),
    [...nums2Map.keys()].filter(key => !nums1Map.has(key))
  ]

};
// @lc code=end

