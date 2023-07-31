/*
 * @lc app=leetcode.cn id=1984 lang=javascript
 *
 * [1984] 学生分数的最小差值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function (nums, k) {
  nums.sort((a, b) => a - b);

  let min = Infinity;
  for (let i = 0; i <= nums.length - k; i++) {
    min = Math.min(min, nums[i + k - 1] - nums[i]);
  }

  return min;
};
// @lc code=end

