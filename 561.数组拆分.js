/*
 * @lc app=leetcode.cn id=561 lang=javascript
 *
 * [561] 数组拆分
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 为了使 min(ai, bi) 的总和最大，我们应该将数组中较小的数字两两配对。这样可以确保较大的数字不会被"浪费"在 min 操作中。
// 这个贪心策略之所以有效，是因为：
// 1. 排序后，相邻的两个数字会被配对。
// 2. 在每一对中，较小的数字会被选中（因为我们只选择偶数索引的元素）。
// 3. 这确保了较大的数字总是被"牺牲"，而较小的数字被保留，从而最大化总和。
var arrayPairSum = function (nums) {
  if (nums.length === 1) {
    return nums[0]
  }

  nums.sort((a, b) => a - b)

  let result = 0

  for (let i = 0; i <= nums.length - 2; i += 2) {
    result = result + Math.min(nums[i], nums[i + 1])
  }

  return result
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = arrayPairSum;
// @after-stub-for-debug-end