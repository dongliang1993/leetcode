/*
 * @lc app=leetcode.cn id=739 lang=javascript
 *
 * [739] 每日温度
 */

// @lc code=start
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  const stack = []
  const result = []

  for (let i = 0; i < temperatures.length; i++) {
    if (!stack.length) {
      stack.push(i)
    } else {
      while (stack.length && temperatures[i] > temperatures[stack.length - 1]) {
        const prevIndex = stack.pop()
        result[ans] = (i - prevIndex)
      }
      stack.push(i)
    }
  }

  return result
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = dailyTemperatures;
// @after-stub-for-debug-end