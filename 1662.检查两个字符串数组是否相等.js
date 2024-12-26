/*
 * @lc app=leetcode.cn id=1662 lang=javascript
 *
 * [1662] 检查两个字符串数组是否相等
 */

// @lc code=start
/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function (word1, word2) {
  // 使用 join 将数组中的字符串连接成完整字符串
  const word1String = word1.join('')
  const word2String = word2.join('')

  // 比较两个字符串是否相等
  return word1String === word2String
};
// @lc code=end

