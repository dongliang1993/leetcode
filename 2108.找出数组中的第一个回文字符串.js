/*
 * @lc app=leetcode.cn id=2108 lang=javascript
 *
 * [2108] 找出数组中的第一个回文字符串
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function (words) {
  function isPalindrome(word) {
    let left = 0;
    let right = word.length - 1

    while (left < right) {
      if (word[left] !== word[right]) {
        return false;
      }

      left++;
      right--;
    }

    return true
  }

  // 使用 find 查找第一个回文字符串
  return words.find(word => isPalindrome(word)) || ''
};
// @lc code=end

