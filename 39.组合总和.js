/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const result = []
  const path = []

  function backtracking(candidates, startIndex) {
    const sum = path.reduce((preTotal, nextNum) => preTotal += nextNum, 0)

    if (sum === target) {
      result.push(path.slice())
      return
    }

    if (sum > target) {
      return
    }

    for (let i = startIndex; i < candidates.length; i++) {
      path.push(candidates[i])
      // 递归调用 backtracking，注意这里传入的索引仍然是 i，允许重复使用同一个数字
      backtracking(candidates, i)
      path.pop()
    }
  }

  backtracking(candidates, 0)
  return result
};


var combinationSum = function (candidates, target) {
  const result = []
  const path = []
  // 对候选数组进行排序，这样可以更早地进行剪枝
  candidates.sort((a, b) => a - b)

  function backtracking(candidates, startIndex) {
    const sum = path.reduce((preTotal, nextNum) => preTotal += nextNum, 0)

    if (sum === target) {
      result.push(path.slice())
      return
    }

    for (let i = startIndex; i < candidates.length; i++) {
      // 剪枝
      if (sum + candidates[i] > target) {
        break
      }

      path.push(candidates[i])
      // 递归调用 backtracking，注意这里传入的索引仍然是 i，允许重复使用同一个数字
      backtracking(candidates, i)
      path.pop()
    }
  }

  backtracking(candidates, 0)
  return result
};
// @lc code=end

