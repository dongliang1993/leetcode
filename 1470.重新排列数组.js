/*
 * @lc app=leetcode.cn id=1470 lang=javascript
 *
 * [1470] 重新排列数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
  // 创建一个空数组来存储结果
  const result = [];

  // 遍历前半部分数组
  for (let i = 0; i < n; i++) {
    // 将第i个元素和第i+n个元素交替添加到结果数组中
    result.push(nums[i]);
    result.push(nums[i + n]);
  }

  // 返回重新排列后的数组
  return result;
};

// @lc code=end
