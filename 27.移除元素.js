/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let shouldBeReplacedIndex = 0

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[shouldBeReplacedIndex] = nums[i]
      shouldBeReplacedIndex++
    }
  }

  return shouldBeReplacedIndex
};
// @lc code=end

