/*
 * @lc app=leetcode.cn id=674 lang=javascript
 *
 * [674] 最长连续递增序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
  let left = 0
  let right = 0
  let maxLength = 0

  while (right < nums.length) {
    // 如果递增，就继续扩展窗口
    if (right === 0 || nums[right] > nums[right - 1]) {
      // do nothing, 直接往右扩展
    } else {
      // 如果递增中断，窗口左边界跳到 right
      left = right
    }

    // 更新最大长度
    maxLength = Math.max(maxLength, right - left + 1)
    right++
  }

  return maxLength
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = findLengthOfLCIS;
// @after-stub-for-debug-end