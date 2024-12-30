/*
 * @lc app=leetcode.cn id=2799 lang=javascript
 *
 * [2799] 统计完全子数组的数目
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var countCompleteSubarrays = function (nums) {
  const n = nums.length
  const uniqueCount = new Set(nums).size
  let result = 0

  for (let left = 0; left < n; left++) {
    const subArraySet = new Set()

    for (let right = left; right < n; right++) {
      subArraySet.add(nums[right])

      // 如果当前窗口的不同元素数量等于 uniqueCount
      if (subArraySet.size === uniqueCount) {
        result++
      }
    }
  }


  return result
};

var countCompleteSubarrays = function (nums) {
  const n = nums.length
  const uniqueCount = new Set(nums).size
  let result = 0
  let left = 0;
  let right = 0;
  const frequencyMap = new Map()

  while (right < n) {
    const num = nums[right]
    frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1)

    // 如果当前窗口的不同元素数量等于 uniqueCount
    while (frequencyMap.size === uniqueCount) {
      // 这个时候，把剩余的元素放进去，肯定也是满足条件的
      result += n - right

      // 缩小窗口，移除左边界元素
      frequencyMap.set(nums[left], frequencyMap.get(nums[left]) - 1)
      if (frequencyMap.get(nums[left]) === 0) {
        frequencyMap.delete(nums[left]);
      }

      left++;
    }

    right++
  }

  return result
};
// @lc code=end

