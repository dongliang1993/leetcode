/*
 * @lc app=leetcode.cn id=216 lang=javascript
 *
 * [216] 组合总和 III
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  const result = []
  const path = []

  function backtracking(start, currSum) {
    // 剪枝：如果选满 k 个或累加已超 n
    if (currSum > n) {
      return;
    }

    // k 个数
    if (path.length === k) {
      // k 个数加起来为 n
      if (currSum === n) {
        result.push(path.slice())
        return
      }
    }

    // 枚举下一位数字，从 start 到 9
    for (let i = start; i <= 9; i++) {
      path.push(i)
      currSum += i
      backtracking(i + 1, currSum)
      currSum -= i
      path.pop()
    }
  }

  backtracking(1, 0)

  return result
};
// @lc code=end

