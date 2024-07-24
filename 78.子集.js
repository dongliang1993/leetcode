/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const result = []
  const path = []

  function backtracking(nums, start) {
    result.push(path.slice())

    if (start >= nums.length) {
      return
    }

    for (; start < nums.length; start++) {
      path.push(nums[start])
      backtracking(nums, start + 1)
      path.pop()
    }
  }

  backtracking(nums, 0)

  return result
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = subsets;
// @after-stub-for-debug-end