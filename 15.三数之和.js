/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  // 对数组进行升序排序，为了方便使用双指针法
  nums.sort((a, b) => a - b);

  const result = [];

  // [-4, -1,-1, 0,1,2]
  for (let i = 0; i < nums.length - 2; i++) {
    // 如果当前数字和前一个数字相同，则跳过，避免重复的三元组。
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);

        // 优化4：找到结果后再去重
        // 移动左指针，并跳过相同的元素
        while (left < right && nums[left] === nums[left + 1]) {
          left++;
        }

        // 移动右指针，并跳过相同的元素
        while (left < right && nums[right] === nums[right - 1]) {
          right--;
        }

        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = threeSum;
// @after-stub-for-debug-end