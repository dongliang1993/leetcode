/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (!digits.length) {
    return []
  }

  const digitMap = new Map([
    ['2', 'abc'],
    ['3', 'def'],
    ['4', 'ghi'],
    ['5', 'jkl'],
    ['6', 'mno'],
    ['7', 'pqrs'],
    ['8', 'tuv'],
    ['9', 'wxyz']
  ])

  const result = []
  const path = []

  function backtracking(digitIndex) {
    if (path.length === digits.length) {
      result.push(path.join(''))
      return
    }

    const letter = digitMap.get(digits[digitIndex])

    for (let i = 0; i < letter.length; i++) {
      path.push(letter[i])
      backtracking(digitIndex + 1)
      path.pop()
    }
  }

  backtracking(0)

  return result

};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = letterCombinations;
// @after-stub-for-debug-end