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

var sortedSquares = function (nums) {
  // 双指针，分别指向数组的左右两端
  let left = 0
  let right = nums.length - 1
  const result = new Array(nums.length)
  let index = nums.length - 1

  while (left <= right) {
    const leftNumSquare = Math.pow(nums[left], 2)
    const rightNumSquare = Math.pow(nums[right], 2)

    // 比较左右指针对应元素的平方值大小
    if (rightNumSquare >= leftNumSquare) {
      result[index] = rightNumSquare
      right--
    } else {
      result[index] = leftNumSquare
      left++
    }

    index--
  }

  return result
}
// @lc code=end


// @after-stub-for-debug-begin
module.exports = sortedSquares;
// @after-stub-for-debug-end