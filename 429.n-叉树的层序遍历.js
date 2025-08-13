/*
 * @lc app=leetcode.cn id=429 lang=javascript
 *
 * [429] N 叉树的层序遍历
 */

// @lc code=start
/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) {
    return []
  }

  const queue = [root]
  const result = []

  while (queue.length) {
    const levelSize = queue.length
    const level = []

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift()
      level.push(node.val)

      // 若有子节点，将它们全部入队
      if (node.children && node.children.length) {
        queue.push(...node.children)
      }
    }

    result.push(level)
  }

  return result
};
// @lc code=end

