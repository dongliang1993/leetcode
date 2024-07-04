/*
 * @lc app=leetcode.cn id=1925 lang=javascript
 *
 * [1925] 统计平方和三元组的数目
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countTriples = function (n) {
  let result = 0;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      const sum = Math.sqrt(i * i + j * j);
      if (sum % 1 === 0 && sum <= n) {
        result++;
      }
    }
  }

  return result;
};
// @lc code=end

