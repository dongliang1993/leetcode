/*
 * @lc app=leetcode.cn id=347 lang=javascript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// 一个求数组中出现频率最高的k个元素的问题。我们可以采用以下方法:

// 使用Map统计每个元素出现的次数
// 遍历Map,把键值对转换为数组,排序后取前k个即可
var topKFrequent = function (nums, k) {
  // 使用Map统计频率
  const charMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const char = nums[i];
    charMap.set(char, charMap.has(char) ? charMap.get(char) + 1 : 1);
  }

  // Map转数组排序
  return Array.from(charMap).sort((a, b) => b[1] - a[1]).slice(0, k).map(item => item[0])
};
// @lc code=end

