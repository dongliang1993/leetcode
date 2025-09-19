/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  const numMap = new Map()

  for (const num of nums) {
    const count = numMap.get(num) || 0
    numMap.set(num, count + 1)
  }

  const sortedArr = new Array()
  const sorted = [...numMap.entries()].sort((a, b) => a[0] - b[0]);

  sorted.forEach((item) => {
    let [num, count] = item

    while (count) {
      sortedArr.push(num)
      count--
    }
  }, '')

  console.log(sortedArr, 'sorted')

  return sortedArr[sortedArr.length - k]
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = findKthLargest;
// @after-stub-for-debug-end