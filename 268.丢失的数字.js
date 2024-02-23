/*
 * @lc app=leetcode.cn id=268 lang=javascript
 *
 * [268] 丢失的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  const numSet = new Set(nums)

  for (let i = 0; i <= nums.length; i++) {
    if (!numSet.has(i)) {
      return i
    }
  }
};
// @lc code=end

