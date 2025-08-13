/*
 * @lc app=leetcode.cn id=560 lang=javascript
 *
 * [560] 和为 K 的子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 暴力方法
var subarraySum = function (nums, k) {
  let result = 0

  for (let i = 0; i < nums.length; i++) {
    let sum = 0
    for (let j = i; j < nums.length; j++) {
      sum += nums[j]

      if (sum === k) {
        result++
      }
    }
  }

  return result
};


var subarraySum = function (nums, k) {
  // 前缀和
  // {0 => 1} 表示数组中单个元素等于 k 的情况
  const hashMaps = new Map([[0, 1]])
  let count = 0
  let prefixSum = 0

  for (let i = 0; i < nums.length; i++) {
    prefixSum += nums[i]

    // 检查是否在哈希表 hashMaps 中存在 prefixSum - k，
    // 如果存在，说明在此之前的某个位置到当前位置的子数组的和为 k。
    // 将这些子数组的个数累加到计数变量 count 中。
    if (hashMaps.has(prefixSum - k)) {
      count += hashMaps.get(prefixSum - k)
    }

    hashMaps.set(prefixSum, (hashMaps.get(prefixSum) || 0) + 1)
  }

  return count
}

// @lc code=end


// @after-stub-for-debug-begin
module.exports = subarraySum;
// @after-stub-for-debug-end