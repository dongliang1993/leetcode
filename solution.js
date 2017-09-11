// 一天一道 leetcode
// 第一道
// Given an array of 2n integers, your task is to group these integers into n pairs of integer, say (a1, b1), (a2, b2), ..., (an, bn) which makes sum of min(ai, bi) for all i from 1 to n as large as possible.
// Example 1:
// Input: [1,4,3,2]
// Output: 4
// Explanation: n is 2, and the maximum sum of pairs is 4 = min(1, 2) + min(3, 4).
// Note:
// n is a positive integer, which is in the range of [1, 10000].
// All the integers in the array will be in the range of [-10000, 10000].
var arrayPairSum = function(nums) {
  const length = nums.length
  // 先排序，然后找位于第偶数个位置上的数字
  nums.sort((a, b) => a - b)
  let result = 0
  for(let i = 0; i < length; i++) {
    if (!(i % 2)) {
      result += nums[i]
    }
  }
  return result
};

// 第二道
// 485. Max Consecutive Ones
// Given a binary array, find the maximum number of consecutive 1s in this array.
// Example 1:
// Input: [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s.
//     The maximum number of consecutive 1s is 3.
// Note:
// The input array will only contain 0 and 1.
// The length of input array is a positive integer and will not exceed 10,000
/**
 * @param {number[]} nums
 * @return {number}
 */
// 思路是，把数组变成字符串，然后按照 0 切分，reduce 比较两个数的大小
// 一开始比较的是length，但是第一次之后，prev 就是上一次的长度了，是数字，没有length
// 这个属性
var findMaxConsecutiveOnes = function(nums) {
  return nums.join('').split(0).reduce((prev, next) => {
    return Math.max(prev, next.length)
  }, 0)
};