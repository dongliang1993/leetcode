/*
 * @lc app=leetcode.cn id=150 lang=javascript
 *
 * [150] 逆波兰表达式求值
 */

// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const stack = []

  for (let i = 0; i < tokens.length; i++) {
    const currentChar = tokens[i]
    let a = 0
    let b = 0

    switch (currentChar) {
      // 如果匹配到的事运算符号
      case "+":
        b = stack.pop()
        a = stack.pop()
        stack.push(a + b)
        break
      case "-":
        b = stack.pop()
        a = stack.pop()
        stack.push(a - b)
        break
      case "*":
        b = stack.pop()
        a = stack.pop()
        stack.push(a * b)
        break
      case "/":
        b = stack.pop()
        a = stack.pop()
        stack.push(parseInt((a / b)))
        break
      // 如果是数字的情况下
      default:
        stack.push(Number(currentChar))
    }
  }

  return stack[0]
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = evalRPN;
// @after-stub-for-debug-end