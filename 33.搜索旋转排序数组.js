/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1

  while (left <= right) {
    const middle = left + Math.floor((right - left) / 2)

    if (nums[middle] === target) {
      return middle
    }

    // 左侧升序
    if (nums[middle] >= nums[left]) {
      if (target >= nums[left] && target < nums[middle]) {
        right = middle - 1
      } else {
        left = middle + 1
      }
    } else {
      // 右侧有序
      if (target > nums[middle] && target <= nums[right]) {
        left = middle + 1
      } else {
        right = middle - 1
      }
    }
  }

  return -1
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = search;
// @after-stub-for-debug-end