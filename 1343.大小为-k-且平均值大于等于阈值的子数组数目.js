/*
 * @lc app=leetcode.cn id=1343 lang=javascript
 *
 * [1343] 大小为 K 且平均值大于等于阈值的子数组数目
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function (arr, k, threshold) {
  let left = 0
  let right = 0;
  // 用来维护窗口中元素的和
  let sum = 0
  let result = 0

  while (right < arr.length) {
    // 向右移动 right，先将 k 个元素填入窗口中，即 window_sum += arr[right]
    sum = sum + arr[right]

    // 当窗口元素个数为 k 时
    if (right - left + 1 === k) {
      // 判断窗口内的元素和平均值是否大于等于阈值 threshold
      if (sum >= k * threshold) {
        result++
      }

      sum = sum - arr[left]
      left++
    }

    right++
  }

  return result
};

var numOfSubarrays = function (arr, k, threshold) {
  // 计算目标和：threshold * k
  const target = threshold * k;
  let count = 0;
  let sum = 0;

  // 计算第一个窗口的和
  for (let i = 0; i < k; i++) {
    sum += arr[i];
  }

  // 检查第一个窗口
  if (sum >= target) {
    count++;
  }

  // 滑动窗口
  for (let i = k; i < arr.length; i++) {
    sum = sum + arr[i] - arr[i - k];
    if (sum >= target) {
      count++;
    }
  }

  return count;
};
// @lc code=end

