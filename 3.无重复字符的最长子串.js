/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let left = 0;
  let right = 0;
  let maxLength = 0
  const set = new Set()

  while (right < s.length) {
    const char = s[right]

    // 如果窗口内已经包含 char，那么再加入一个 char 会导致窗口内有重复元素
    // 所以要在加入 char，那么再加入一个之前，先移出窗口内的 char
    while (set.has(char)) {
      set.delete(s[left])
      left++
    }

    set.add(char)

    maxLength = Math.max(maxLength, right - left + 1)
    right++
  }

  return maxLength
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = lengthOfLongestSubstring;
// @after-stub-for-debug-end