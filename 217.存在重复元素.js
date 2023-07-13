/*
 * @lc app=leetcode.cn id=217 lang=javascript
 *
 * [217] 存在重复元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
// 对于数组中每个元素，我们将它插入到哈希表中。
// 如果插入一个元素时发现该元素已经存在于哈希表中，则说明存在重复的元素。
var containsDuplicate = function (nums) {
  const hashSet = new Set()
  for (let i = 0; i < nums.length; i++) {
    if (hashSet.has(nums[i])) {
      return true
    }

    hashSet.add(nums[i])
  }

  return false
};
// @lc code=end

