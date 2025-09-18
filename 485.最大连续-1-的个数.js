/*
 * @lc app=leetcode.cn id=485 lang=javascript
 *
 * [485] 最大连续 1 的个数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let left = 0
  let right = 0
  let maxCount = 0

  while (right < nums.length) {
    // 如果遇到的值为 1
    if (nums[right] === 1) {
      maxCount = Math.max(maxCount, right - left + 1)
      right++
    } else {
      // 碰到 0，窗口重置
      right++
      left = right
    }
  }

  return maxCount
};
// @lc code=end

