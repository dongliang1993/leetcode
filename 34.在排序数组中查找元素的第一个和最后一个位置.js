/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  const result = [-1, -1]

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== target) {
      continue
    }

    const isFirst = nums[i - 1] !== target
    const isLast = nums[i + 1] !== target

    if (isFirst) {
      result[0] = i
    }

    if (isLast) {
      result[1] = i
    }
  }

  return result
};

// [1,2,2,2,4,5,6] 2
var searchRange = function (nums, target) {
  function findLeftIndex(nums, target) {
    let left = 0
    let right = nums.length - 1
    let ans = -1

    while (left <= right) {
      const middle = left + Math.floor((right - left) / 2)

      if (nums[middle] === target) {
        right = middle - 1
        ans = middle
      } else if (nums[middle] > target) {
        right = middle - 1
      } else {
        left = middle + 1
      }
    }

    return ans
  }

  function findRightIndex(nums, target) {
    let left = 0
    let right = nums.length - 1
    let ans = -1

    while (left <= right) {
      const middle = left + Math.floor((right - left) / 2)

      if (nums[middle] === target) {
        ans = middle
        left = middle + 1
      } else if (nums[middle] < target) {
        left = middle + 1
      } else {
        right = middle - 1
      }
    }

    return ans
  }

  const leftIndex = findLeftIndex(nums, target);
  if (leftIndex === -1) {
    return [-1, -1];
  }
  const rightIndex = findRightIndex(nums, target);
  return [leftIndex, rightIndex];
}
// @lc code=end


// @after-stub-for-debug-begin
module.exports = searchRange;
// @after-stub-for-debug-end