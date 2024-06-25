/*
 * @lc app=leetcode.cn id=345 lang=javascript
 *
 * [345] 反转字符串中的元音字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  // 大小写两种形式
  const vowelsSet = new Set('aeiouAEIOU')

  let left = 0
  let right = s.length - 1
  let result = s.split('')

  while (left < right) {
    // 寻找下一个左侧元音
    while (left < right && !vowelsSet.has(s[left])) {
      left++
    }

    // 寻找下一个右侧元音
    while (left < right && !vowelsSet.has(s[right])) {
      right--
    }

    [result[left], result[right]] = [result[right], result[left]];

    left++
    right--
  }

  return result.join('')
}
// @lc code=end
