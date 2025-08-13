/*
 * @lc app=leetcode.cn id=227 lang=javascript
 *
 * [227] 基本计算器 II
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
const numReg = /\d+/;

var calculate = function (s) {
  const stack = []
  let op = '+'

  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') {
      continue
    }

    let temp = s[i]

    if (numReg.test(s[i])) {
      while (i + 1 < s.length && numReg.test(s[i + 1])) {
        temp = temp + s[i + 1]
        i += 1
      }

      if (op == '+') {
        stack.push(+temp)
      } else if (op == '-') {
        stack.push(-temp)
      } else if (op == '*') {
        stack.push(stack.pop() * temp)
      } else if (op == '/') {
        stack.push(parseInt(stack.pop() / temp))
      }
    } else if (s[i] == '+' || s[i] == '-' || s[i] == '*' || s[i] == '/') {
      op = s[i]
    }
  };

  let result = 0
  for (let i = 0; i < stack.length; i++) {
    result += stack[i]
  }

  return result
}
// @lc code=end


// @after-stub-for-debug-begin
module.exports = calculate;
// @after-stub-for-debug-end