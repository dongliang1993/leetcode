/*
 * @lc app=leetcode.cn id=438 lang=javascript
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  const result = []
  const pMap = new Map()

  for (let i = 0; i < p.length; i++) {
    pMap.set(p[i], pMap.has(p[i]) ? pMap.get(p[i]) + 1 : 1)
  }

  for (let i = 0; i < s.length; i++) {
    const sMap = new Map(pMap)
    for (let j = i; j < i + p.length; j++) {
      if (!sMap.has(s[j])) {
        break
      }
      const count = sMap.get(s[j]) - 1
      if (count === 0) {
        sMap.delete(s[j])
      } else {
        sMap.set(s[j], count)
      }
    }
    if (sMap.size === 0) {
      result.push(i)
    }
  }

  return result
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = findAnagrams;
// @after-stub-for-debug-end