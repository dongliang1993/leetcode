/*
 * @lc app=leetcode.cn id=496 lang=javascript
 *
 * [496] 下一个更大元素 I
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  const map = new Map()
  const stack = []

  for (let i = 0; i < nums2.length; i++) {
    let top = stack[stack.length - 1]
    if (!top) {
      stack.push(nums2[i])
    } else {
      while (nums2[i] > stack[stack.length - 1]) {
        map[stack[stack.length - 1]] = nums2[i]
        stack.pop()
      }
      stack.push(nums2[i])
    }
  }

  const result = []

  for (let i = 0; i < nums1.length; i++) {
    result.push(
      map.get(nums1[i]) !== undefined ? map.get(nums1[i]) : -1
    )
  }

  return result
};

var nextGreaterElement = function (nums1, nums2) {
  const stack = []
  const map = new Map() // 存 num -> 下一个更大元素

  for (let num of nums2) {
    while (stack.length && num > stack[stack.length - 1]) {
      const smaller = stack.pop()
      map.set(smaller, num)
    }

    stack.push(num)
  }

  // 栈中剩下的没有下一个更大元素
  while (stack.length) {
    map.set(stack.pop(), -1)
  }

  return nums1.map(num => map.get(num))
}
// @lc code=end


// @after-stub-for-debug-begin
module.exports = nextGreaterElement;
// @after-stub-for-debug-end