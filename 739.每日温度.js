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
  const n = temperatures.length
  const answer = new Array(n).fill(0)
  const stack = [] // 存索引，保证单调递减

  for (let i = 0; i < n; i++) {
    while (stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
      const prevIndex = stack.pop()
      answer[prevIndex] = i - prevIndex
    }

    stack.push(i)
  }

  return answer
}
// @lc code=end


// @after-stub-for-debug-begin
module.exports = dailyTemperatures;
// @after-stub-for-debug-end