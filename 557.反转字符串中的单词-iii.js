/*
 * @lc app=leetcode.cn id=557 lang=javascript
 *
 * [557] 反转字符串中的单词 III
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let result = ''
  let reversedWord = ''

  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') {
      result = result + reversedWord + ' '
      reversedWord = ''
    } else {
      reversedWord = s[i] + reversedWord
    }
  }

  // 处理最后一个单词
  if (reversedWord) {
    result = result + reversedWord
  }

  return result
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = reverseWords;
// @after-stub-for-debug-end