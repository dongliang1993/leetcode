/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let lastWord = ''

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === ' ') {
      if (!lastWord) {
        continue
      } else {
        return lastWord.length
      }
    } else {
      lastWord = s[i] + lastWord
    }
  }

  return lastWord.length
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = lengthOfLastWord;
// @after-stub-for-debug-end