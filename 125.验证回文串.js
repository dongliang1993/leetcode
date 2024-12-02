/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let left = 0;
  let right = s.length - 1;
  // 将所有的大写字符转换为小写字符
  s = s.toLowerCase();

  while (left < right) {
    if (!isValidateChar(s[left])) {
      left++;
      continue;
    }

    if (!isValidateChar(s[right])) {
      right--;
      continue;
    }

    if (s[left] !== s[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
};

function isValidateChar(c) {
  return /[a-zA-Z0-9]/.test(c);
}
// @lc code=end

