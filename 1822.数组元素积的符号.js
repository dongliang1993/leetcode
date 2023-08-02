/*
 * @lc app=leetcode.cn id=1822 lang=javascript
 *
 * [1822] 数组元素积的符号
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function (nums) {
  let product = 1
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      return 0
    }
    if (nums[i] < 0) {
      product *= -1
    }
  }

  return product
};
// @lc code=end

