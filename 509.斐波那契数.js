/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  if (n === 0) {
    return 0
  }

  if (n === 1) {
    return 1
  }

  return fib(n - 1) + fib(n - 2)
};


var fib = function (n) {
  const hashMap = new Map([
    [0, 0],
    [1, 1]
  ])

  function helper(n) {
    if (hashMap.has(n)) {
      return hashMap.get(n)
    }

    const result = helper(n - 1) + helper(n - 2)
    hashMap.set(n, result)

    return result
  }

  return helper(n)
}

var fib = function (n) {
  if (n <= 1) {
    return n
  }

  const result = [0, 1]

  for (let i = 2; i <= n; i++) {
    result[i] = result[i - 1] + result[i - 2]
  }

  return result[n]
}
// @lc code=end

