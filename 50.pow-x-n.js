/*
 * @lc app=leetcode.cn id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (n === 0) {
    return 1
  }

  // 处理负指数情况
  // 负指数处理：如果 n 是负数，将 x 转换为 1 / x，并将 n 变为其绝对值 -n。
  if (n < 0) {
    x = 1 / x
    n = -n
  }

  // 但对于较大的指数，它的效率会比较低，因为每次递归只减少了指数的绝对值 1。
  // 我们可以使用“分治法”（Divide and Conquer）来改进这个算法，使其时间复杂度为 O(log n)。
  // 递归计算
  function fastPow(x, n) {
    if (n === 0) {
      return 1;
    }

    const half = fastPow(x, Math.floor(n / 2));

    if (n % 2 === 0) {
      return half * half;
    } else {
      return half * half * x;
    }
  }

  return fastPow(x, n);
};
// @lc code=end

