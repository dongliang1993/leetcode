/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 代码通过遍历数组 nums 的每个元素，计算目标值与当前元素的差值 diff。
// 然后检查在 prevMap 中是否存在键为 diff 的项。
// 如果存在，说明之前已经遍历过一个元素，其值与 diff 相等，那么找到了两个数的组合满足条件，可以返回它们的索引。
// 如果不存在，将当前元素作为键，其索引作为值存储在 prevMap 中，以便在后续的遍历中进行查找。
var twoSum = function (nums, target) {
  const prevMap = {}

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i]
    if (prevMap[diff] !== undefined) {
      return [prevMap[diff], i]
    }
    prevMap[nums[i]] = i
  }
};
// @lc code=end

