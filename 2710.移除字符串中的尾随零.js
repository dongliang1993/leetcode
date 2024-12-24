/*
 * @lc app=leetcode.cn id=2710 lang=javascript
 *
 * [2710] 移除字符串中的尾随零
 */

// @lc code=start
/**
 * @param {string} num
 * @return {string}
 */
var removeTrailingZeros = function (num) {
  let lastIndex = num.length - 1

  // 从字符串末尾开始遍历
  // 一旦遇到非零字符，停止移除尾随零
  while (lastIndex >= 0 && num[lastIndex] === '0') {
    lastIndex--
  }

  return num.slice(0, lastIndex + 1);
};
// @lc code=end

