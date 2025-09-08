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
  nums.sort((a, b) => a - b) // 数字升序排序

  let current = 0

  while (current < nums.length) {
    const nextIndex = current + 1

    if (nextIndex >= nums.length) {
      return nums[current]
    }

    if (nums[current] === nums[nextIndex]) {
      current += 2 // 跳过一对
    } else {
      return nums[current]
    }
  }
}
// @lc code=end


// @after-stub-for-debug-begin
module.exports = singleNumber;
// @after-stub-for-debug-end