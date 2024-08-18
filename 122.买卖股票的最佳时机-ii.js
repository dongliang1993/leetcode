/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
// 只要今天的价格比昨天高，我们就进行交易（买入昨天的，卖出今天的），这样可以累积所有的正利润。
// 我们不需要考虑具体在哪天买入哪天卖出，只需要把所有的上涨都计算在内。这样就能保证我们获得最大利润。
var maxProfit = function (prices) {
  let totalProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      totalProfit += prices[i] - prices[i - 1];
    }
  }

  return totalProfit;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = maxProfit;
// @after-stub-for-debug-end