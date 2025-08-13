/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  // 存储结果的数组
  const result = []
  // 存储当前路径的数组
  const path = []

  /**
 * 回溯函数
 * @param {number} start - 当前开始位置
 */
  function backtracking(start) {
    // 如果路径长度达到了 k，则将路径加入结果中
    if (path.length === k) {
      // 使用 slice 拷贝一个新数组
      result.push(path.slice())
      return
    }

    for (let i = start; i <= n; i++) {
      path.push(i)
      // 递归调用，i+1 防止选择重复数字
      backtracking(i + 1)
      // 回溯，移除最后一个数字
      path.pop()
    }
  }

  backtracking(1)

  return result
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = combine;
// @after-stub-for-debug-end