/*
 * @lc app=leetcode.cn id=153 lang=javascript
 *
 * [153] 寻找旋转排序数组中的最小值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let left = 0;
  let right = nums.length - 1

  while (left < right) {
    const middle = left + Math.floor((right - left) / 2)

    // 我们选择比较 nums[mid] 和 nums[right] 而不是 nums[left]，
    // 是因为在旋转数组中，最右边的元素总是可以作为一个可靠的参考点。
    // 最左边的元素可能是最大的，也可能是最小的，但最右边的元素总是来自于原数组的后半部分。
    if (nums[middle] > nums[right]) {
      left = middle + 1
    } else {
      right = middle
    }
  }

  return nums[left]
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = findMin;
// @after-stub-for-debug-end