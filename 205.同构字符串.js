/*
 * @lc app=leetcode.cn id=205 lang=javascript
 *
 * [205] 同构字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  if (s.length !== t.length) {
    return false
  }

  const sMap = {}
  const tMap = {}

  for (let i = 0; i < s.length; i++) {
    // 如果 s 中的字符已经和 t 中的字符建立了映射关系，那么就需要判断当前的字符是否和 t 中的字符相等
    if (sMap.hasOwnProperty(s[i])) {
      if (sMap[s[i]] !== t[i]) {
        return false
      }
    } else {
      sMap[s[i]] = t[i]
      if (tMap.hasOwnProperty(t[i])) {
        return false
      } else {
        tMap[t[i]] = s[i]
      }
    }

    // if (sMap.hasOwnProperty(s[i])) {

    // } else {
    //   sMap[s[i]] = t[i]
    //   tMap[t[i]] = s[i]
    // }
  }

  return true
};
// @lc code=end

