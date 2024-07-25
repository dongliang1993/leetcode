/*
 * @lc app=leetcode.cn id=784 lang=javascript
 *
 * [784] 字母大小写全排列
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function (s) {
  const result = []
  const path = []

  function checkIsLetter(letter) {
    return /[a-z]|[A-Z]/.test(letter)
  }

  function backtracking(startIndex) {
    if (path.length === s.length) {
      result.push(path.join(''))
      return
    }

    for (let i = startIndex; i < s.length; i++) {
      if (checkIsLetter(s[i])) {
        path.push(s[i].toLowerCase())
        backtracking(i + 1)
        path.pop()

        path.push(s[i].toUpperCase())
        backtracking(i + 1)
        path.pop()
      } else {
        path.push(s[i])
        backtracking(i + 1)
        path.pop()
      }
    }
  }

  backtracking(0)

  return result
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = letterCasePermutation;
// @after-stub-for-debug-end