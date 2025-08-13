/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2 !== 0) {
    return false
  }

  const stack = []
  const matchMap = {
    '(': ')',
    '[': ']',
    '{': '}'
  }

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
      stack.push(s[i])
    } else {
      if (s[i] === matchMap[stack[stack.length - 1]]) {
        stack.pop()
      } else {
        return false
      }
    }
  }

  return stack.length ? false : true
};

var isValid = function (s) {
  if (!s) {
    return true
  }

  const stack = []

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
      stack.push(s[i])
      continue
    }

    const match = stack[stack.length - 1]
    if (s[i] === ')') {
      if (match !== '(') {
        return false
      } else {
        stack.pop()
      }
    }

    if (s[i] === ']') {
      if (match !== '[') {
        return false
      } else {
        stack.pop()
      }
    }

    if (s[i] === '}') {
      if (match !== '{') {
        return false
      } else {
        stack.pop()
      }
    }
  }

  return stack.length === 0
}
// @lc code=end
