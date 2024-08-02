/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  // 树的深度优先遍历
  if (!root) {
    return false
  }

  const stack = [{ node: root, sum: root.val }]

  while (stack.length) {
    const { node, sum } = stack.pop()

    // 如果是叶子节点，且路径和等于 targetSum
    if (!node.left && !node.right && sum === targetSum) {
      return true
    }

    // 如果有右子节点，压入栈中
    if (node.right) {
      stack.push({ node: node.right, sum: sum + node.right.val });
    }

    // 如果有左子节点，压入栈中
    if (node.left) {
      stack.push({ node: node.left, sum: sum + node.left.val });
    }
  }

  return false
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = hasPathSum;
// @after-stub-for-debug-end