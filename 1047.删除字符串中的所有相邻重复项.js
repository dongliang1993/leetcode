/*
 * @lc app=leetcode.cn id=1047 lang=javascript
 *
 * [1047] 删除字符串中的所有相邻重复项
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
  const stack = []

  // 消除一对相邻重复项可能会导致新的相邻重复项出现，
  // 如从字符串 abba 中删除 bb 会导致出现新的相邻重复项 aa 出现。
  for (let i = 0; i < s.length; i++) {
    if (!stack.length || stack[stack.length - 1] !== s[i]) {
      stack.push(s[i])
    } else {
      stack.pop()
    }
  }

  return stack.join('')

};
// @lc code=end

