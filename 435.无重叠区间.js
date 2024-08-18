/*
 * @lc app=leetcode.cn id=435 lang=javascript
 *
 * [435] 无重叠区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
  if (intervals.length === 0) {
    return 0;
  }

  // 按照区间的开始时间排序
  intervals.sort((a, b) => a[0] - b[0])
  let count = 0

  for (let index = 1; index < intervals.length; index++) {
    const pre = intervals[index - 1]
    const current = intervals[index]

    // 如果发现重叠（当前区间的开始时间小于前一个区间的结束时间），它会：
    // 增加需要移除的区间计数
    // 更新当前区间的结束时间为两个重叠区间中较小的那个
    if (current[0] < pre[1]) {
      count++
      current[1] = Math.min(pre[1], current[1])
    }
  }

  return count
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = eraseOverlapIntervals;
// @after-stub-for-debug-end