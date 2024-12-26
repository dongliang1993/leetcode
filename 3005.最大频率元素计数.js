/*
 * @lc app=leetcode.cn id=3005 lang=javascript
 *
 * [3005] 最大频率元素计数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function (nums) {
  let maxFrequency = 0
  let sumOfMaxFrequency = 0
  const frequencyMap = new Map()

  // 统计频次并计算最大频率
  for (let num of nums) {
    frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1)
    maxFrequency = Math.max(maxFrequency, frequencyMap.get(num))
  }

  // 累加所有具有最大频率的元素的频次
  frequencyMap.forEach((value) => {
    if (value === maxFrequency) {
      sumOfMaxFrequency += value
    }
  })

  return sumOfMaxFrequency
};
// @lc code=end

