/*
 * @lc app=leetcode.cn id=860 lang=javascript
 *
 * [860] 柠檬水找零
 */

// @lc code=start
/**
 * @param {number[]} bills
 * @return {boolean}
 */
// 首先,我们需要跟踪我们手头的5美元和10美元钞票的数量。
// 对于每位顾客,我们需要检查他们支付的金额,并相应地更新我们的钱箱。
// 如果顾客支付5美元,我们只需增加5美元钞票的数量。
// 如果顾客支付10美元,我们需要找回5美元,所以我们需要有一张5美元钞票。
// 如果顾客支付20美元,我们可以用一张10美元和一张5美元找零,或者用三张5美元找零。
var lemonadeChange = function (bills) {
  let fiveCount = 0
  let tenCount = 0

  for (let i = 0; i < bills.length; i++) {
    const bill = bills[i]

    if (bill === 5) {
      fiveCount++
    } else if (bill === 10) {
      if (fiveCount === 0) {
        return false
      }

      fiveCount--
      tenCount++
    } else if (bill === 20) {
      if (tenCount > 0 && fiveCount > 0) {
        tenCount--
        fiveCount--
      } else if (fiveCount >= 3) {
        fiveCount -= 3
      } else {
        return false
      }
    }
  }

  return true
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = lemonadeChange;
// @after-stub-for-debug-end