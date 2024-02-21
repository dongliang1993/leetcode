/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  nums.sort()

  for (let i = 0; i < nums.length; i++) {
    const nextIndex = i + 1
    if (nextIndex >= nums.length) {
      return nums[i]
    }

    if (nums[i] !== nums[nextIndex]) {
      return nums[i]
    }
    i++
  }
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = singleNumber;
// @after-stub-for-debug-end