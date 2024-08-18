/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
// 这个贪心算法的核心思想是：我们只需要关心在每一步能跳到的最远距离，而不需要考虑具体怎么跳。如果我们能跳到最后，那就一定存在一种有效的跳跃方式。
var canJump = function (nums) {
  // 我们使用一个变量 maxReach 来记录我们能够到达的最远位置。初始化为0，因为我们开始时在第一个位置。
  let maxReach = 0;

  // 确保了我们只考虑我们能实际到达的位置。
  for (let i = 0; i <= cover; i++) {
    // 对于每个位置，我们更新 maxReach
    // 这表示从当前位置 i，我们最远能跳到 i + nums[i]。
    maxReach = Math.max(nums[i] + i, maxReach)

    // 如果在任何时候 maxReach 大于或等于数组的最后一个索引，我们就返回 true，因为我们能够到达最后一个位置：
    if (cover >= nums.length - 1) {
      return true
    }
  }

  // 如果遍历结束后我们还没有返回 true，那么我们无法到达最后一个位置，返回 false。      
  return false
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = canJump;
// @after-stub-for-debug-end