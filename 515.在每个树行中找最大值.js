/*
 * @lc app=leetcode.cn id=515 lang=javascript
 *
 * [515] 在每个树行中找最大值
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
var largestValues = function (root) {
  if (!root) {
    return []
  }

  const queue = [root]
  const result = []

  while (queue.length) {
    const levelSize = queue.length
    let maxNum = -Infinity

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift()
      maxNum = Math.max(node.val, maxNum)

      if (node.left) {
        queue.push(node.left)
      }

      if (node.right) {
        queue.push(node.right)
      }
    }

    result.push(maxNum)
    maxNum = -Infinity
  }

  return result
};
// @lc code=end

