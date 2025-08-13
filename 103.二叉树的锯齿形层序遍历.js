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
  // 处理边界情况
  if (!root) {
    return []
  }

  const result = []
  const queue = [root]
  let isLeftToRight = true;  // 更清晰的变量命名

  while (queue.length) {
    const currentLevel = []
    const levelSize = queue.length

    // 处理当前层的所有节点
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift()
      // 根据方向决定插入方式
      isLeftToRight ? currentLevel.push(node.val) : currentLevel.unshift(node.val)

      // 按照固定顺序添加子节点
      if (node.left) {
        queue.push(node.left)
      }

      if (node.right) {
        queue.push(node.right)
      }
    }

    // 切换遍历方向
    isLeftToRight = !isLeftToRight;
    result.push(currentLevel)
  }

  return result
};
// @lc code=end

