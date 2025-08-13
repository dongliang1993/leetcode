/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (nums.length <= 1) {
    return nums.length
  }

  let slow = 0;

  // fast 指针从下标 1 开始遍历数组
  for (let fast = 1; fast < nums.length; fast++) {
    // 当当前元素与 slow 指针所指元素不同时，说明遇到了新的不重复元素
    if (nums[slow] !== nums[fast]) {
      slow++; // slow 指针前移一位
      // 将新的不重复元素复制到 slow 位置
      nums[slow] = nums[fast];
    }
  }

  // slow 为最后一个唯一元素的索引，所以返回的个数是 slow + 1
  return slow + 1;
};

var removeDuplicates = function (nums) {
  // 处理边界情况：如果数组长度小于等于1，已经没有重复元素
  if (nums.length <= 1) {
    return nums.length
  }

  // 慢指针指向当前无重复区域的最后一个元素
  let slow = 0
  let fast = 1

  while (fast < nums.length) {
    if (nums[fast] === nums[slow]) {
      // 如果快指针指向的元素与慢指针相同，说明是重复元素，跳过
      fast++
      continue
    }

    // 找到一个不重复的元素，放到慢指针后面的位置
    nums[slow + 1] = nums[fast]

    // 慢指针前进一步，表示无重复区域扩大
    slow++
    fast++
  }

  // 返回无重复区域的长度（slow + 1）
  return slow + 1
}
// @lc code=end


// @after-stub-for-debug-begin
module.exports = removeDuplicates;
// @after-stub-for-debug-end