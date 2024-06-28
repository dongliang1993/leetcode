/*
 * @lc app=leetcode.cn id=977 lang=javascript
 *
 * [977] 有序数组的平方
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  const result = new Array(nums.length);
  let left = 0;
  let right = nums.length - 1
  // position 指针用于填充 result 数组，从最后一个位置开始
  let position = nums.length - 1

  while (left <= right) {
    const leftSquare = Math.pow(nums[left], 2)
    const rightSquare = Math.pow(nums[right], 2)

    if (leftSquare < rightSquare) {
      result[position] = rightSquare
      right--
    } else {
      result[position] = leftSquare
      left++
    }
    position--
  }

  return result
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = sortedSquares;
// @after-stub-for-debug-end