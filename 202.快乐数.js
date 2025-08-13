/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  const seen = new Set()

  while (n !== 1 && !seen.has(n)) {
    seen.add(n)
    n = getNext(n)
  }

  return n === 1
};

function getNext(num) {
  let total = 0

  while (num > 0) {
    const digit = num % 10
    total = total + digit * digit
    num = Math.floor(num / 10)
  }

  return total
}
// @lc code=end


// @after-stub-for-debug-begin
module.exports = isHappy;
// @after-stub-for-debug-end