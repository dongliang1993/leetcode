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

function isAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const count = {};

  for (let char of s) {
    count[char] = (count[char] || 0) + 1;
  }

  for (let char of t) {
    if (!count[char]) {
      return false;
    }

    count[char]--;
  }

  return true;
}

// @lc code=end


// @after-stub-for-debug-begin
module.exports = isAnagram;
// @after-stub-for-debug-end