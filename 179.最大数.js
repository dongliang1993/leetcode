/*
 * @lc app=leetcode.cn id=179 lang=javascript
 *
 * [179] 最大数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
  // 1. 数字转字符串
  const arr = nums.map(num => num.toString());

  // 2. 自定义比较函数
  arr.sort((a, b) => {
    const order1 = a + b;
    const order2 = b + a;
    return order2 - order1;
  });

  // 3. 拼接数组为字符串
  const res = arr.join('');
  // 4. 处理 0 开头的特殊情况
  return res[0] === '0' ? '0' : res;
};
// @lc code=end

