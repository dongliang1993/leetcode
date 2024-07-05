/*
 * @lc app=leetcode.cn id=344 lang=javascript
 *
 * [344] 反转字符串
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  let left = 0
  let right = s.length - 1

  while (left < right) {
    [s[left], s[right]] = [s[right], s[left]]
    left++
    right--
  }
};

// 递归版本
var reverseString = function (s) {
  const left = 0
  const right = s.length - 1

  const helper = (left, right) => {
    // 递归终止条件：当左右指针相遇或交错时
    if (left >= right) {
      return
    }

    // 交换左右指针所指的元素
    [s[left], s[right]] = [s[right], s[left]]
    // 递归处理剩下的元素
    helper(left + 1, right - 1)
  }

  helper(left, right)

  return s
};
// @lc code=end

