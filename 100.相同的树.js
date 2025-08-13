/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  // 如果两个节点都为空，返回 true
  if (!p && !q) {
    return true
  }

  // 如果一个为空，另一个不为空，返回 false
  if ((p && !q) || (!p && q)) {
    return false
  }

  // 节点值不同，
  if (p.val !== q.val) {
    return false
  }

  // 递归比较左右子树
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};
// @lc code=end

