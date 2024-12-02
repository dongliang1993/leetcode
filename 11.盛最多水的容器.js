/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
// 初始化两个指针，一个指向最左端，另一个指向最右端。
// 在每一步，计算两个指针对应的垂线与 x 轴围成的容器的水量。
// 移动较短的那条线，因为这样可能找到更高的线，从而可能增加容器容积。
var maxArea = function (height) {
  let maxArea = -Infinity
  let left = 0;
  let right = height.length - 1

  while (left < right) {
    const area = (right - left) * Math.min(height[left], height[right])
    maxArea = Math.max(maxArea, area)

    if (height[left] <= height[right]) {
      left++
    } else {
      right--
    }
  }

  return maxArea
};
// @lc code=end

