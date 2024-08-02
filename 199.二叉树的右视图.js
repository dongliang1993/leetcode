/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
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
var rightSideView = function (root) {
  // 按层遍历，
  if (!root) {
    return []
  }

  const result = []
  const queue = [root]

  while (queue.length) {
    // 当前层级节点数量
    const levelSize = queue.length
    const currentLevel = []

    for (let i = 0; i < levelSize; i++) {
      // 出队当前层的节点
      // queue.shift() 操作在处理大数据量时可能会导致性能问题，
      // 因为 shift() 方法会重新调整数组索引。
      // 使用 deque（双端队列）数据结构可以优化这一点。
      const node = queue.shift()
      currentLevel.push(node.val)

      // 按照右子节点先于左子节点的顺序将子节点入队，
      // 这样在下一次循环中右边的节点会先被处理。
      if (node.right) {
        queue.push(node.right)
      }

      if (node.left) {
        queue.push(node.left)
      }
    }

    // 当前层的第一个节点值（从右侧看）即为 currentLevel[0]，将其加入 result。
    result.push(currentLevel[0])
  }

  return result
};
// @lc code=end

