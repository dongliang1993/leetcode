/*
 * @lc app=leetcode.cn id=680 lang=javascript
 *
 * [680] 验证回文串 II
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      // 先尝试删除左字符
      // 再尝试删除右字符
      return checkPalindrome(s, left + 1, right) || checkPalindrome(s, left, right - 1)
    }

    left++;
    right--;
  }

  return true;
};

/**
* 判断删除指定字符后是否可以成为回文 
* @param {number} left 左边界
* @param {number} right 右边界
*/
function checkPalindrome(s, left, right) {
  while (left < right) {
    if (s[left] != s[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}
// @lc code=end


// @after-stub-for-debug-begin
module.exports = validPalindrome;
// @after-stub-for-debug-end