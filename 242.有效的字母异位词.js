/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  return s.split('').sort().join() === t.split('').sort().join()
};

var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false
  }

  const sMap = {}
  const tMap = {}

  for (let i = 0; i < s.length; i++) {
    sMap[s[i]] = (sMap[s[i]] || 0) + 1
    tMap[t[i]] = (tMap[t[i]] || 0) + 1
  }

  for (const key in sMap) {
    if (sMap[key] !== tMap[key]) {
      return false
    }
  }

  return true
};


// @lc code=end


// @after-stub-for-debug-begin
module.exports = isAnagram;
// @after-stub-for-debug-end