/*
 * @lc app=leetcode.cn id=434 lang=javascript
 *
 * [434] 字符串中的单词数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function (s) {
  return s.split(' ').filter(item => item !== '').length;
};

var countSegments = function (s) {
  let count = 0;
  let wordStarted = false;

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== ' ') {
      if (!wordStarted) {
        count++;
        wordStarted = true;
      }
    } else {
      wordStarted = false;
    }
  }

  return count;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = countSegments;
// @after-stub-for-debug-end