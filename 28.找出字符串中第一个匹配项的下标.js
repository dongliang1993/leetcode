/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 找出字符串中第一个匹配项的下标
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  return haystack.indexOf(needle)
};

var strStr = function (haystack, needle) {
  const needleLength = needle.length

  for (let i = 0; i < haystack.length; i++) {
    if (haystack.substr(i, needleLength) === needle) {
      return i
    }
  }

  return -1
};
// @lc code=end

