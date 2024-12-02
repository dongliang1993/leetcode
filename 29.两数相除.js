/*
 * @lc app=leetcode.cn id=29 lang=javascript
 *
 * [29] 两数相除
 */

// @lc code=start
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  // 处理特殊情况
  if (dividend === -2147483648 && divisor === -1) {
    return 2147483647; // 处理溢出
  }

  const sign = ((divisor > 0 && dividend > 0) || (divisor < 0 && dividend < 0)) ? 1 : -1
  let result = 0
  // 转换为正数
  dividend = Math.abs(dividend);
  divisor = Math.abs(divisor);

  while (dividend >= divisor) {
    let temp = divisor
    let multiple = 1

    while (dividend >= (temp + temp)) {
      multiple += multiple
      temp += temp
    }

    dividend -= temp
    result += multiple
  }

  return result * sign
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = divide;
// @after-stub-for-debug-end