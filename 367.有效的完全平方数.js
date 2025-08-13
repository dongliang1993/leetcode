/*
 * @lc app=leetcode.cn id=367 lang=javascript
 *
 * [367] 有效的完全平方数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  if (num < 2) {
    return num
  }

  let left = 0
  let right = Math.floor(num / 2)

  while (left <= right) {
    const middle = left + Math.floor((right - left) / 2)
    const total = middle * middle

    if (total === num) {
      return true
    } else if (total > num) {
      right = middle - 1
    } else {
      left = middle + 1
    }
  }

  return false
};
// @lc code=end

