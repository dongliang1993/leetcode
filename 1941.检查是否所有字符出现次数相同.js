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
    if (hashMap.get(s[i])) {
      hashMap.set(s[i], hashMap.get(s[i]) + 1)
    } else {
      hashMap.set(s[i], 1)
    }
  }

  // 将所有出现次数加入集合
  const numsSet = new Set()

  for (let i = 0; i < s.length; i++) {
    numsSet.add(hashMap.get(s[i]))
  }

  // 如果集合的大小为1，说明所有字符出现次数相同
  return numsSet.size === 1
};
// @lc code=end

