/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const result = []
  const path = new Set()
  const len = nums.length

  function backtracking(nums) {
    if (path.size === len) {
      result.push(Array.from(path))
      return
    }

    for (let i = 0; i < nums.length; i++) {
      if (path.has(nums[i])) {
        continue
      }

      path.add(nums[i])
      backtracking(nums)
      path.delete(nums[i])
    }
  }

  backtracking(nums)

  return result
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = permute;
// @after-stub-for-debug-end