/*
 * @lc app=leetcode.cn id=2148 lang=javascript
 *
 * [2148] 元素计数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var countElements = function (nums) {
  if (nums.length <= 1) {
    return 0
  }

  let result = 0
  const min = Math.min(...nums);
  const max = Math.max(...nums);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > min && nums[i] < max) {
      result++
    }
  }

  return result
};
// @lc code=end

