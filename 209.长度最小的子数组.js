/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let left = 0
  let right = 0
  let minLength = Infinity
  let windowSum = 0

  while (right < nums.length) {
    windowSum += nums[right]

    while (windowSum >= target) {
      minLength = Math.min(minLength, right - left + 1)
      windowSum -= nums[left]
      left++
    }

    right++
  }

  // 如果minLength没有更新过，则返回0
  return minLength === Infinity ? 0 : minLength
};
// @lc code=end



function prefixSum(input) {
  // 数组长度
  const n = input[0]
  const prefixSumArr = new Array(n)

  prefixSumArr[0] = 0
  prefixSumArr[1] = input[1]

  for (let i = 2; i < n; i++) {
    prefixSumArr[i] = input[i] + input[i - 1]
  }

  console.log(prefixSumArr, 'prefixSumArr')
}

prefixSum([5,
  1,
  2,
  3,
  4,
  5,
  [0, 1],
  [1, 3]]
)

// @after-stub-for-debug-begin
module.exports = minSubArrayLen;
// @after-stub-for-debug-end