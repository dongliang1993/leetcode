/*
 * @lc app=leetcode.cn id=392 lang=javascript
 *
 * [392] 判断子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// 遍历 t 字符串（长字符串）
// 如果 t[i] === s[j]，标识 s[j] 已经匹配到了，j++
// 如果 j === s.length，说明 s 已经匹配完了，返回 true
// 遍历结束，返回 false 
var isSubsequence = function (s, t) {
  let j = 0

  for (let i = 0; i < t.length; i++) {
    if (t[i] === s[j]) {
      j++
    }
  }

  return j === s.length
};
// @lc code=end

