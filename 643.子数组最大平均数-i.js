/*
 * @lc app=leetcode.cn id=643 lang=javascript
 *
 * [643] 子数组最大平均数 I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let left = 0;
  let right = 0
  let maxAverage = -Infinity
  let window = 0

  while (right < nums.length) {
    window += nums[right]

    if (right - left + 1 >= k) {
      maxAverage = Math.max(maxAverage, window / k)
      window = window - nums[left]
      left++
    }

    right++
  }

  return maxAverage
};
// @lc code=end

