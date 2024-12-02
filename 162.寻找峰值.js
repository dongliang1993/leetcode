/*
 * @lc app=leetcode.cn id=162 lang=javascript
 *
 * [162] 寻找峰值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 可以使用二分查找来解决这个问题,主要有以下几个原因:
// 1. 数组中至少存在一个峰值元素:
// 根据题目描述,我们假设 nums[-1] = nums[n] = -∞。这意味着数组的两端都是下降的,因此数组中一定存在至少一个峰值元素。
// 2. 相邻元素比较可以缩小搜索范围:
// 如果 nums[mid] < nums[mid+1],说明峰值元素一定在 mid 的右半部分。
// 如果 nums[mid] > nums[mid+1],说明峰值元素一定在 mid 的左半部分或者就是 mid 本身。
// 3. 二分查找的适用性:
// 由于每次比较都能缩小搜索范围,我们可以使用二分查找算法来高效地找到峰值元素。
var findPeakElement = function (nums) {
  let left = 0;
  let right = nums.length - 1

  while (left < right) {
    const middle = left + Math.floor((right - left) / 2)
    if (nums[middle] < nums[middle + 1]) {
      left = middle + 1
    } else {
      right = middle
    }
  }

  // 最终,left 和 right 会收敛到同一个值,这个值就是峰值元素的索引。
  return left
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = findPeakElement;
// @after-stub-for-debug-end