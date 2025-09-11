/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
var minDepth = function (root) {
  if (!root) {
    return 0
  }

  const stack = [{
    node: root,
    level: 1
  }]

  while (stack.length) {
    const levelSize = stack.length

    for (let i = 0; i < levelSize; i++) {
      const { node, level } = stack.shift()

      if (!node.left && !node.right) {
        return level
      }

      if (node.left) {
        stack.push({
          node: node.left,
          level: level + 1
        })
      }

      if (node.right) {
        stack.push({
          node: node.right,
          level: level + 1
        })
      }
    }
  }
};
// @lc code=end

