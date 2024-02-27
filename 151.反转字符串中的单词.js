/*
 * @lc app=leetcode.cn id=151 lang=javascript
 *
 * [151] 反转字符串中的单词
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let result = ''
  let word = ''

  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') {
      continue
    }

    // 直接跳过连续的空格
    while (i < s.length && s[i] !== ' ') {
      word += s[i]
      i++
    }

    // 在最后拼接结果之前，需要判断 word 是否为空，如果为空则表示最后一个字符是空格，此时不需要将空格添加到结果中。
    result = word + ' ' + result
    word = ''
  }

  // 去除首尾空格
  return result.trim();
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = reverseWords;
// @after-stub-for-debug-end