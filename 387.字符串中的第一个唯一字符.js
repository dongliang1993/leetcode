/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const charMap = new Map()

  // 统计每个字符出现的次数
  for (let i = 0; i < s.length; i++) {
    charMap.set(s[i], (charMap.get(s[i]) || 0) + 1);
  }

  // 找到第一个出现次数为1的字符
  for (let i = 0; i < s.length; i++) {
    if (charMap.get(s[i]) === 1) {
      return i
    }
  }

  return -1
};
// @lc code=end

