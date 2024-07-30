/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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

// 递归的DFS实现
// 递归地计算每个子树的最大深度，并取左右子树深度的最大值加1。
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) {
    return 0;
  }

  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);

  return Math.max(leftDepth, rightDepth) + 1;
};


/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) {
    return 0;
  }

  const queue = [root];
  let depth = 0;

  // 按层遍历，麻烦的地方是每一层遍历结束都要给结果 +1
  // 也就是需要判断怎么样才是一层结束
  while (queue.length) {
    // 每一层的节点数量
    const levelSize = queue.length
    // 一次要把一层的节点全部遍历结束
    for (let i = 0; i < levelSize; i++) {
      const current = queue.shift()
      if (current && current.left !== null) {
        queue.push(current.left)
      }

      if (current && current.right !== null) {
        queue.push(current.right)
      }
    }

    depth++
  }

  return depth
};
// @lc code=end

