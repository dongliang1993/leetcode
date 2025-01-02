/*
 * @lc app=leetcode.cn id=2461 lang=javascript
 *
 * [2461] 长度为 K 子数组中的最大和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function (nums, k) {
  if (nums.length < k) {
    return 0;
  }

  let maxSum = 0;
  let sum = 0
  let left = 0
  let right = 0
  // 使用 Map 来记录窗口中的元素及其出现次数
  const subArrMap = new Map()

  while (right < nums.length) {
    sum += nums[right];
    subArrMap.set(nums[right], (subArrMap.get(nums[right]) || 0) + 1)

    if (right - left + 1 === k) {
      // 只有当窗口中的元素都不重复时才更新 maxSum
      if (subArrMap.size === k) {
        maxSum = Math.max(maxSum, sum);
      }

      // 移除窗口左边的元素
      const leftNum = nums[left];
      sum -= leftNum;  // 先减去左边的元素
      subArrMap.set(leftNum, (subArrMap.get(leftNum) || 0) - 1)
      if (subArrMap.get(leftNum) === 0) {
        subArrMap.delete(leftNum)
      }

      left++
    }

    right++
  }

  return maxSum
};
// @lc code=end

