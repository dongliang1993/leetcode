/*
 * @lc app=leetcode.cn id=958 lang=javascript
 *
 * [958] 二叉树的完全性检验
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
 * @return {boolean}
 */
var isCompleteTree = function (root) {
  if (!root) {
    return true
  }

  const queue = [root]
  let foundNull = false; // 是否已经遇到过空节点


  while (queue.length) {
    const node = queue.shift()

    if (node === null) {
      // 标记遇到 null
      foundNull = true
      continue
    }

    if (foundNull) {
      // 如果之前遇到过 null，现在又遇到非空节点 → 不是完全二叉树
      return false;
    }

    queue.push(node.left)
    queue.push(node.right)
  }

  return true
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = isCompleteTree;
// @after-stub-for-debug-end