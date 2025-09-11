/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层序遍历
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
var zigzagLevelOrder = function (root) {
  if (!root) {
    return []
  }

  const result = []
  const stack = [root]
  let leftToRight = true

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

    // 根据方向决定是否翻转
    if (!leftToRight) {
      currentLevel.reverse();
    }

    result.push(currentLevel);
    leftToRight = !leftToRight; // 切换方向
  }

  return result
}
// @lc code=end

