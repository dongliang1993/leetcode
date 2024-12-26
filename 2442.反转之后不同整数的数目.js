/*
 * @lc app=leetcode.cn id=2442 lang=javascript
 *
 * [2442] 反转之后不同整数的数目
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var countDistinctIntegers = function (nums) {
  const numsSet = new Set(nums)

  // 反转数字的辅助函数
  function reverseNumber(num) {
    return parseInt(num.toString().split('').reverse().join(''), 10);
  }

  nums.forEach(num => {
    numsSet.add(reverseNumber(num))
  })

  return numsSet.size
};
// @lc code=end

