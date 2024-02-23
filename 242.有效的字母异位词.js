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
  const charMap = new Map()

  for (let i = 0; i < s.length; i++) {
    const sum = charMap.get(s[i]) || 0
    charMap.set(s[i], sum + 1)
  }

  for (let i = 0; i < t.length; i++) {
    if (charMap.has(t[i])) {
      charMap.set(t[i], charMap.get(t[i]) - 1)
    } else {
      return false
    }
  }

  return Array.from(charMap.values()).every(sum => sum === 0)
};

// @lc code=end


// @after-stub-for-debug-begin
module.exports = isAnagram;
// @after-stub-for-debug-end