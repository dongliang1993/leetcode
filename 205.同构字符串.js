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
    return false;
  }

  const sMap = new Map(); // 用于记录 s 中字符到 t 中字符的映射关系
  const tMap = new Map(); // 用于记录 t 中字符到 s 中字符的映射关系

  for (let i = 0; i < s.length; i++) {
    const sChar = s[i];
    const tChar = t[i];

    if (!sMap.has(sChar)) {
      sMap.set(sChar, tChar);
    } else {
      // 如果 sChar 已经有映射，但映射不正确
      if (sMap.get(sChar) !== tChar) {
        return false;
      }
    }

    if (!tMap.has(tChar)) {
      tMap.set(tChar, sChar);
    } else {
      // 如果 tChar 已经有映射，但映射不正确
      if (tMap.get(tChar) !== sChar) {
        return false;
      }
    }
  }

  // 遍历完毕，没有不一致的映射关系，返回true
  return true
};
// @lc code=end

