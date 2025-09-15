/*
 * @lc app=leetcode.cn id=1423 lang=javascript
 *
 * [1423] 可获得的最大点数
 */

// @lc code=start
/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function (cardPoints, k) {
  const n = cardPoints.length;
  const windowSize = n - k;

  // 一次性全部拿完
  if (windowSize === 0) {
    return cardPoints.reduce((collection, next) => collection + next, 0)
  }

  // 计算前 windowSize 个的和
  let windowSum = 0
  for (let i = 0; i < windowSize; i++) {
    windowSum += cardPoints[i]
  }

  let minSum = windowSum

  // 滑动窗口
  for (let i = windowSize; i < cardPoints.length; i++) {
    windowSum = windowSum + cardPoints[i] - cardPoints[i - windowSize]
    minSum = Math.min(minSum, windowSum)
  }

  const total = cardPoints.reduce((a, b) => a + b, 0);

  return total - minSum;
};
// @lc code=end

