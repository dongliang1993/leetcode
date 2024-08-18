/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  // 按照区间的开始排序
  intervals.sort((a, b) => a[0] - b[0])
  const result = []

  for (let interval of intervals) {
    // 如果 result 为空，或者当前区间与上一个区间不重叠，直接添加
    if (result.length === 0 || result[result.length - 1][1] < interval[0]) {
      result.push(interval);
    } else {
      // 否则，与上一个区间重叠，更新上一个区间的结束时间
      result[result.length - 1][1] = Math.max(result[result.length - 1][1], interval[1]);
    }
  }

  return result
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = merge;
// @after-stub-for-debug-end