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
  for (const ch of s) {
    if (stack.length > 0 && stack[stack.length - 1] === ch) {
      stack.pop() // 删除相邻重复的两个字符
    } else {
      stack.push(ch)
    }
  }

  return stack.join('')
};

// @lc code=end

