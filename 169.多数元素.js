/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const hashMap = {}

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    if (hashMap[num]) {
      hashMap[num]++
    } else {
      hashMap[num] = 1
    }

    if (hashMap[num] > nums.length / 2) {
      return num
    }
  }
};
// @lc code=end

