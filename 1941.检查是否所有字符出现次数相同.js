/*
 * @lc app=leetcode.cn id=1941 lang=javascript
 *
 * [1941] 检查是否所有字符出现次数相同
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function (s) {
  const hashMap = new Map()

  // 记录每个字符出现的次数
  for (let i = 0; i < s.length; i++) {
    const count = hashMap.get(s[i]) || 0
    hashMap.set(s[i], count)
  }

  // 将所有出现次数加入集合
  const counts = new Set(hashMap.values());
  // 如果集合的大小为1，说明所有字符出现次数相同
  return counts.size === 1
};

// @lc code=end

