/*
 * @lc app=leetcode.cn id=637 lang=javascript
 *
 * [637] 二叉树的层平均值
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
 * @return {number[]}
 */
var averageOfLevels = function (root) {
  if (!root) {
    return []
  }

  const queue = [root]
  const result = []

  while (queue.length) {
    const levelSize = queue.length
    let levelSum = 0

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift()
      levelSum += node.val

      if (node.left) {
        queue.push(node.left)
      }

      if (node.right) {
        queue.push(node.right)
      }
    }

    result.push(levelSum / levelSize)
  }

  return result
};
// @lc code=end

