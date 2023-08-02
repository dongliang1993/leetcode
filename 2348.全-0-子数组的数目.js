/*
 * @lc app=leetcode.cn id=2348 lang=javascript
 *
 * [2348] 全 0 子数组的数目
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function (nums) {
  let total = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      total++

      let right = i + 1
      while (right < nums.length && nums[right] === 0) {
        total++
        right++
      }
    }
  }

  return total
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = zeroFilledSubarray;
// @after-stub-for-debug-end