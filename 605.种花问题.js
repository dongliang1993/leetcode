/*
 * @lc app=leetcode.cn id=605 lang=javascript
 *
 * [605] 种花问题
 */

// @lc code=start
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  const copy = flowerbed.slice()

  for (let i = 0; i < flowerbed.length; i++) {
    if (
      (copy[i - 1] === undefined || copy[i - 1] === 0)
      &&
      copy[i] === 0
      && (copy[i + 1] === 0 || copy[i + 1] === undefined)
    ) {
      copy[i] = 1
      n -= 1
    }
  }

  return n <= 0
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = canPlaceFlowers;
// @after-stub-for-debug-end