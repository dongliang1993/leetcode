/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
  if (!root) {
    return []
  }

  const queue = [{ node: root, sum: root.val, path: [root.val] }]
  const result = []

  while (queue.length) {
    const levelSize = queue.length

    for (let i = 0; i < levelSize; i++) {
      const { node, sum, path } = queue.shift()

      if (!node.left && !node.right) {
        if (sum === targetSum) {
          result.push(path)
        }
      }

      if (node.left) {
        queue.push({
          node: node.left,
          sum: sum + node.left.val,
          path: [...path, node.left.val]
        })
      }

      if (node.right) {
        queue.push({
          node: node.right,
          sum: sum + node.right.val,
          path: [...path, node.right.val]
        })
      }
    }
  }

  return result
};

var pathSum = function (root, targetSum) {
  // 处理边界情况
  if (!root) return [];

  const result = [];

  // DFS 辅助函数
  const dfs = (node, remainingSum, currentPath) => {
    // 处理叶子节点
    if (!node.left && !node.right) {
      if (remainingSum === node.val) {
        result.push([...currentPath, node.val]);
      }
      return;
    }

    // 将当前节点添加到路径中
    currentPath.push(node.val);

    // 递归遍历左右子树
    node.left && dfs(node.left, remainingSum - node.val, currentPath);
    node.right && dfs(node.right, remainingSum - node.val, currentPath);

    // 回溯：移除当前节点
    currentPath.pop();
  };

  dfs(root, targetSum, []);
  return result;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = pathSum;
// @after-stub-for-debug-end