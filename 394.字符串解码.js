/*
 * @lc app=leetcode.cn id=394 lang=javascript
 *
 * [394] 字符串解码
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  const strStack = []
  const numStack = []
  let currentSum = 0
  let curStr = ""

  for (let char of s) {
    // 如果是数字
    if (/\d/.test(char)) {
      // 累积数字，不止一位
      currentSum = currentSum * 10 + Number(char)
    } else if (char === '[') {
      numStack.push(currentSum)
      strStack.push(curStr)
      currentSum = 0
      curStr = ''
    } else if (char === ']') {
      // 取出重复次数
      const repeatTimes = numStack.pop()
      const prevStr = strStack.pop()
      curStr = prevStr + curStr.repeat(repeatTimes)
    } else {
      curStr += char
    }
  }

  return curStr
};
// @lc code=end

