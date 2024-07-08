/*
 * @lc app=leetcode.cn id=779 lang=javascript
 *
 * [779] 第K个语法符号
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthGrammar = function (n, k) {
  // 先生成表
  let result = '0'

  for (let i = 1; i < n; i++) {
    let newResult = ''

    for (let j = 0; j < result.length; j++) {
      if (result[j] === '0') {
        newResult += '01'
      }

      if (result[j] === '1') {
        newResult += '10'
      }
    }

    result = newResult
  }

  return Number(result[k - 1])
};

// 递归解决方法如下：
// 1. 如果 n 为 1，直接返回 0（因为在第一行只有一个元素 0）。
// 2. 找到 k 在上一行的位置。
// 3. 通过判断 k 是在上一行生成的 01 还是 10 来决定返回 0 或 1。
// n = 3, k = 2
var kthGrammar = function (n, k) {
  if (n === 1) {
    return 0
  }

  const prevK = Math.floor((k + 1) / 2)
  const original = kthGrammar(n - 1, prevK)

  if (original === 0) {
    return k % 2 === 1 ? 0 : 1
  } else {
    return k % 2 === 1 ? 1 : 0
  }
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = kthGrammar;
// @after-stub-for-debug-end