/*
 * @lc app=leetcode.cn id=1768 lang=javascript
 *
 * [1768] 交替合并字符串
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let result = ''

  for (let i = 0; i < word1.length; i++) {
    result += word1[i]
    if (word2[i]) {
      result += word2[i]
    }
  }

  if (word2.length > word1.length) {
    result += word2.slice(word1.length)
  }

  return result
};
// @lc code=end

