/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层序遍历 II
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
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  if (!root) {
    return []
  }

  const stack = [root]
  const result = []

  while (stack.length) {
    const levelSize = stack.length
    const currentLevel = []

    for (let i = 0; i < levelSize; i++) {
      const node = stack.shift()
      currentLevel.push(node.val)

      if (node.left) {
        stack.push(node.left)
      }

      if (node.right) {
        stack.push(node.right)
      }
    }

    result.push(currentLevel)
  }

  return result.reverse();
}
// @lc code=end

