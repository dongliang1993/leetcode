/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let commonPrefix = ''
  const first = strs[0]

  for (let i = 0; i < first.length; i++) {
    const current = first[i]
    for (let j = 1; j < strs.length; j++) {
      if (current !== strs[j][i]) {
        return commonPrefix
      }
    }
    commonPrefix = commonPrefix + current
  }

  return commonPrefix
};
// @lc code=end

