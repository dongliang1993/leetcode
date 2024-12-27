/*
 * @lc app=leetcode.cn id=2240 lang=javascript
 *
 * [2240] 买钢笔和铅笔的方案数
 */

// @lc code=start
/**
 * @param {number} total
 * @param {number} cost1
 * @param {number} cost2
 * @return {number}
 */
var waysToBuyPensPencils = function (total, cost1, cost2) {
  const numOfBuyPens = Math.floor(total / cost1)
  let count = 0

  for (let pens = 0; pens <= numOfBuyPens; pens++) {
    const remainingMoney = total - pens * cost1
    // 计算剩余钱可以买的铅笔数量
    const pencils = Math.floor(remainingMoney / cost2);

    // 每一种钢笔数量的选择，都对应一种铅笔的组合
    count += pencils + 1;
  }

  return count
};

// @lc code=end

