/*
 * @lc app=leetcode.cn id=3066 lang=javascript
 *
 * [3066] 超过阈值的最少操作数 II
 */

// @lc code=start
/**
 * @param {number[]} nums`
 * @param {number} k`
 * @return {number}
 */
var minOperations = function (nums, k) {
  let count = 0

  function repeat() {
    if (nums.length <= 1 || nums.every(item => item >= k)) {
      return
    }

    nums.sort((a, b) => b - a)

    const x = nums.pop()
    const y = nums.pop()

    nums.push(Math.min(x, y) * 2 + Math.max(x, y))
    count++

    repeat()
  }

  repeat()

  return count
};
// @lc code=end

