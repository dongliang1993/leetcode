/*
 * @lc app=leetcode.cn id=219 lang=javascript
 *
 * [219] 存在重复元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  const numsMap = new Map()

  for (let i = 0; i < nums.length; i++) {
    if (numsMap.has(nums[i])) {
      const prevIndex = numsMap.get(nums[i])

      if (i - prevIndex <= k) {
        return true;
      }
    }

    numsMap.set(nums[i], i)
  }

  return false
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = containsNearbyDuplicate;
// @after-stub-for-debug-end