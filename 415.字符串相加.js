/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let carry = 0
  let num1Arr = num1.split('')
  let num2Arr = num2.split('')
  let result = ''

  while (num1Arr.length || num2Arr.length) {
    const n1 = num1Arr.length ? Number(num1Arr.pop()) : 0;
    const n2 = num2Arr.length ? Number(num2Arr.pop()) : 0;
    const sum = n1 + n2 + carry;
    result = (sum) % 10 + result
    carry = Math.floor(sum / 10);
  }

  // 在最后计算完所有数字位的和后，需要检查进位 carry 是否为1，如果是1的话，需要将其加到结果的最前面
  if (carry) {
    result = carry + result
  }

  return result
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = addStrings;
// @after-stub-for-debug-end