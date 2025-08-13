/*
 * @lc app=leetcode.cn id=383 lang=javascript
 *
 * [383] 赎金信
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const magazineCharMap = {}

  for (let char of magazine) {
    magazineCharMap[char] = (magazineCharMap[char] || 0) + 1
  }

  for (let char of ransomNote) {
    // 如果赎金信里出现了不在杂志中的字符
    // 或者数量已经用完了
    if (!magazineCharMap[char] || magazineCharMap[char] < 0) {
      return false
    }

    magazineCharMap[char] = magazineCharMap[char] - 1
  }

  return true
};
// @lc code=end

