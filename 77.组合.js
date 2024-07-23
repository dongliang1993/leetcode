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
 * @param {number} nums - 上限数字 n
 * @param {number} start - 当前开始位置
 */
  function backtracking(nums, start) {
    // 如果路径长度达到了 k，则将路径加入结果中
    if (path.length === k) {
      // 使用slice拷贝一个新数组
      result.push(path.slice())
      return
    }

    for (; start <= nums; start++) {
      path.push(start)
      // 递归调用，start+1 防止选择重复数字
      backtracking(nums, start + 1)
      // 回溯，移除最后一个数字
      path.pop()
    }
  }

  backtracking(n, 1)

  return result
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = combine;
// @after-stub-for-debug-end