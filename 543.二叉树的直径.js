/*
 * @lc app=leetcode.cn id=543 lang=javascript
 *
 * [543] 二叉树的直径
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// 计算二叉树的直径实际上是找到左右子树的深度之和的最大值
var diameterOfBinaryTree = function (root) {
  let diameter = 0;

  function dfs(node) {
    if (!node) {
      return 0
    }

    const leftDepth = dfs(node.left)
    const rightDepth = dfs(node.right)

    // 更新直径
    diameter = Math.max(diameter, leftDepth + rightDepth)

    return Math.max(leftDepth, rightDepth) + 1
  }

  dfs(root)
  return diameter
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = diameterOfBinaryTree;
// @after-stub-for-debug-end