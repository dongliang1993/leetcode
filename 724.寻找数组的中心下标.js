/*
 * @lc app=leetcode.cn id=724 lang=javascript
 *
 * [724] 寻找数组的中心下标
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  // 计算总和 
  let total = 0

  for (let i = 0; i < nums.length; i++) {
    total += nums[i]
  }

  // 计算左边的和
  let leftSum = 0
  for (let i = 0; i < nums.length; i++) {
    // 如果 leftsum == rightsum,说明当前下标 i 是中心下标
    const rightSum = total - leftSum - nums[i]
    if (leftSum === rightSum) {
      return i
    }

    leftSum += nums[i]
  }

  return -1
};
// @lc code=end

