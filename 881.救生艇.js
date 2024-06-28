/*
 * @lc app=leetcode.cn id=881 lang=javascript
 *
 * [881] 救生艇
 */

// @lc code=start
/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
// 为了尽量减少所需的船只数量，最理想的策略是尽可能多地让两个人共用一艘船。
// 为了实现这个目标，我们需要尽量利用每艘船的容量。
// 我们可以采用贪心算法，该算法的主要思路是双指针法，即从数组的两端开始逐步逼近中间。
var numRescueBoats = function (people, limit) {
  // 按体重从小到大进行排序，这样我们可以方便地使用双指针法
  people.sort((a, b) => a - b)

  let left = 0;
  let right = people.length - 1
  let result = 0

  while (left <= right) {
    // 在每一次循环中，尝试将 left 和 right 指针指向的人一起放入一艘船：
    // - 如果两人的总重量不超过 limit，说明可以一起乘坐一艘船，此时需要将 left 指针右移（让最轻的人上船）并将 right 指针左移（让最重的人上船）。
    // - 如果两人的总重量超过了 limit，说明这两个人不能同乘一艘船，此时只能单独让最重的人（即 right 指向的人）乘一艘船，此时仅将 right 指针左移。
    if (people[left] + people[right] <= limit) {
      left++;
    }
    right--;
    result++;
  }

  return result
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = numRescueBoats;
// @after-stub-for-debug-end