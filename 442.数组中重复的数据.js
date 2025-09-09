/*
 * @lc app=leetcode.cn id=442 lang=javascript
 *
 * [442] 数组中重复的数据
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
  const result = []

  for (let i = 0; i < nums.length; i++) {
    const index = Math.abs(nums[i]) - 1

    if (nums[index] > 0) {
      // 第一次遇到，做标记
      nums[index] = -nums[index];
    } else {
      result.push(index + 1)
    }
  }

  return result
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = findDuplicates;
// @after-stub-for-debug-end