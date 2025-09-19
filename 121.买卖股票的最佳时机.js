/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let minPrice = Infinity
  let maxProfit = 0

  for (let price of prices) {
    if (price < minPrice) {
      // 如果当前价格小于最小价格，更新最小价格
      minPrice = price
    } else {
      // 否则，计算当前利润并更新最大利润
      maxProfit = Math.max(maxProfit, price - minPrice)
    }
  }

  // 返回最大利润
  return maxProfit
};
// @lc code=end

