/*
 * @lc app=leetcode.cn id=541 lang=javascript
 *
 * [541] 反转字符串 II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  let stack = []
  let sub = []
  let index = 0
  let cursor = 0
  while (index < s.length) {
    while (cursor < 2 * k && index < s.length) {
      if (cursor < k) {
        sub.unshift(s[index])
      } else if (cursor >= k) {
        sub.push(s[index])
      }

      index++
      cursor++
    }

    cursor = 0
    stack = [...stack, ...sub]
    sub = []
  }

  console.log(stack)
  return stack.join('')
};

function reverseStr(s, k) {
  // 将字符串转换为数组，便于操作
  const arr = s.split('');

  // 每隔 2k 个字符处理一次
  for (let i = 0; i < arr.length; i += 2 * k) {
    // 确定反转的起始位置和结束位置
    let left = i;
    // 如果剩余字符不足 k 个，则 end 指向数组末尾
    let right = Math.min(i + k - 1, arr.length - 1);

    // 双指针交换实现区间反转
    while (left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }

  return arr.join('');
}
// @lc code=end


// @after-stub-for-debug-begin
module.exports = reverseStr;
// @after-stub-for-debug-end