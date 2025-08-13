/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  if (!numbers.length) {
    return []
  }

  let left = 0
  let right = numbers.length - 1

  while (left < right) {
    const sum = numbers[left] + numbers[right]

    if (sum === target) {
      return [left + 1, right + 1]
    } else if (sum > target) {
      // 和太大，需要减小右指针
      right--
    } else {
      // 和太小，需要增加左指针
      left++
    }
  }

  // 未找到符合条件的两个数
  return []
}

// @lc code=end


// @after-stub-for-debug-begin
module.exports = twoSum;
// @after-stub-for-debug-end