/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  // 不为 0 的索引
  let validNumIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      continue;
    } else {
      nums[validNumIndex] = nums[i];
      // 如果不是同一个索引，就把当前索引置为 0
      // 比如 [1]
      if (validNumIndex !== i) {
        nums[i] = 0;
      }
      validNumIndex++;
    }
  }
};

var moveZeroes = function (nums) {
  let slow = 0
  let fast = 0

  while (fast < nums.length) {
    if (nums[fast] !== 0) {
      const temp = nums[slow]
      nums[slow] = nums[fast]
      nums[fast] = temp
      slow++
    }

    fast++
  }

  return nums
}
// @lc code=end


// @after-stub-for-debug-begin
module.exports = moveZeroes;
// @after-stub-for-debug-end