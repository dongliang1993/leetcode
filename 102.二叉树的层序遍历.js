/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
var levelOrder = function (root) {
  // 首先检查根节点是否为空，如果为空则返回空数组
  if (!root) {
    return []
  }

  const queue = [root]
  const result = []

  while (queue.length) {
    // 获取当前层的节点数量 levelSize
    // 不要使用 queue.length ，因为 queue.length 是不断变化的
    const levelSize = queue.length
    // currentLevel 来存储当前层的节点值
    const currentLevel = []

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift()
      currentLevel.push(node.val)

      if (node && node.left) {
        queue.push(node.left)
      }

      if (node && node.right) {
        queue.push(node.right)
      }
    }

    // 当前层遍历完成后，将 currentLevel 数组添加到 result 中
    result.push(currentLevel)
  }

  return result
}
// @lc code=end

// @after-stub-for-debug-begin
module.exports = levelOrder
// @after-stub-for-debug-end
