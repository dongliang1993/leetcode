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

var removeElement = function (nums, val) {
  let slow = 0
  let fast = 0

  while (fast < nums.length) {
    if (nums[fast] === val) {
      fast++
      continue
    }

    nums[slow] = nums[fast]

    slow++
    fast++
  }

  return slow
}
// @lc code=end


// @after-stub-for-debug-begin
module.exports = removeElement;
// @after-stub-for-debug-end