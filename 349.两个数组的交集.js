/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  const numSet1 = new Set(nums1);
  const numSet2 = new Set(nums2);
  const result = [];

  // 遍历 numSet1 中的每个元素
  for (let num of numSet1) {
    // 如果 numSet2 中也包含该元素，则将其添加到结果数组中
    if (numSet2.has(num)) {
      result.push(num);
      // 添加到结果数组后，将其从 numSet2 中删除，确保结果数组中的元素唯一
      numSet2.delete(num);
    }
  }

  return result;
};

var intersection = function (nums1, nums2) {
  const set1 = new Set(nums1);
  const result = new Set();

  for (const num of nums2) {
    if (set1.has(num)) {
      result.add(num);
    }
  }

  return [...result];
}
// @lc code=end


// @after-stub-for-debug-begin
module.exports = intersection;
// @after-stub-for-debug-end