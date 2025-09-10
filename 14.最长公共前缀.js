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
  if (!strs.length) {
    return ''
  }

  const first = strs[0]
  let commonPrefix = ''

  for (let i = 0; i < first.length; i++) {
    const prefix = first.slice(0, i + 1)

    for (let j = 1; j < strs.length; j++) {
      const str = strs[j]

      if (!str.startsWith(prefix)) {
        return commonPrefix
      }
    }

    commonPrefix = prefix
  }

  return commonPrefix
}
// @lc code=end


// @after-stub-for-debug-begin
module.exports = longestCommonPrefix;
// @after-stub-for-debug-end