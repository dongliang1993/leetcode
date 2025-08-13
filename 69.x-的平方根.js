/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根 
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  // 特殊情况：对于 0 和 1，平方根就是 x 本身
  if (x < 2) {
    return x;
  }

  let left = 0
  // 平方根不会超过 x/2
  let right = Math.floor(x / 2)

  while (left <= right) {
    const middle = left + Math.floor((right - left) / 2)
    const total = middle * middle

    if (total === x) {
      return middle
    } else if (total > x) {
      right = middle - 1
    } else {
      left = middle + 1
    }
  }

  // right 会停在最大的满足 right² ≤ x 的位置，因此返回 right。
  return right
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = mySqrt;
// @after-stub-for-debug-end