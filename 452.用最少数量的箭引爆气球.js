/*
 * @lc app=leetcode.cn id=452 lang=javascript
 *
 * [452] 用最少数量的箭引爆气球
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots1 = function (points) {
  if (!points.length) {
    return 0
  }

  if (points.length === 1) {
    return 1
  }

  points.sort((a, b) => a[0] - b[0])
  let count = 1

  for (let i = 1; i < points.length; i++) {
    const prev = points[i - 1]
    const current = points[i]

    // 发现重叠
    if (current[0] <= prev[1]) {
      current[1] = Math.min(current[1], prev[1])
    } else {
      count++
    }
  }

  return count
};

function findMinArrowShots(points) {
  if (points.length === 0) {
    return 0;
  }

  // 我们按照气球的结束坐标对气球进行升序排序。
  // 这是贪心策略的关键：我们优先考虑结束位置靠前的气球。
  points.sort((a, b) => a[1] - b[1]);

  let arrowCount = 1;  // 至少需要一支箭
  let arrowPos = points[0][1];  // 第一支箭的位置

  for (let i = 1; i < points.length; i++) {
    // 如果当前气球的开始坐标大于箭的位置，说明当前的箭无法引爆这个气球，我们需要射出一支新箭。
    if (points[i][0] > arrowPos) {
      arrowCount++;
      // 更新 arrowPos 为当前气球的结束坐标。
      arrowPos = points[i][1];
    }
  }

  return arrowCount;
}
// @lc code=end


// @after-stub-for-debug-begin
module.exports = findMinArrowShots;
// @after-stub-for-debug-end