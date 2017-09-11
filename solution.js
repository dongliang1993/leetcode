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

// 第三道
// 442. Find All Duplicates in an Array
// Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.
// Find all the elements that appear twice in this array.
// Could you do it without extra space and in O(n) runtime?
// Example:
// Input:
// [4,3,2,7,8,2,3,1]
// Output:
// [2,3]

// 妈的 这个结果是对的，但是超时了
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var findDuplicates = function(nums) {
//   return nums.filter(num => {
//     if (!result.includes(num)) {
//       result.push(num)
//     } else {
//       return num
//     }
//   })
// };
// 蛋疼 效率不是很高
var findDuplicates = function(nums) {
  const map = {}
  return nums.filter(num => {
    if (map[num]) {
      return num
    } else {
      map[num] = 1
    }
  })
};
// 效率最高
// 分析下就是，我把数组中的每一项当做下标，然后遍历这个数组
// 判断是不是《0，如果不是，那么久把它*-1，这样，下次再遇到同一个数
// 还会判断，然后判断诚《0，说明之前出现过

// var findDuplicates = function(nums) {
//   var result = [];
//   for (var i = 0; i < nums.length; i++) {
//       var abs = Math.abs(nums[i]);
//       if (nums[abs - 1] < 0) {
//           result.push(abs);
//       }
//       nums[abs - 1] *= -1;
//   }
//   return result;
// };