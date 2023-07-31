/*
 * @lc app=leetcode.cn id=238 lang=javascript
 *
 * [238] 除自身以外数组的乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const prefixSum = []
  const suffixSum = []
  const result = []

  for (let i = 0; i < nums.length; i++) {
    prefixSum[i] = (i == 0 ? 1 : prefixSum[i - 1]) * nums[i]
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    suffixSum[i] = (i === nums.length - 1 ? 1 : suffixSum[i + 1]) * nums[i]
  }

  for (let i = 0; i < nums.length; i++) {
    result[i] = (i == 0 ? 1 : prefixSum[i - 1]) * (i === nums.length - 1 ? 1 : suffixSum[i + 1])
  }
  console.log(prefixSum, suffixSum, result)
  return result
};
// @lc code=end

