/*
 * @lc app=leetcode.cn id=129 lang=javascript
 *
 * [129] 求根节点到叶节点数字之和
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
 * @return {number}
 */
var sumNumbers = function (root) {
  // 深度优先遍历

  if (!root) {
    return 0
  }

  const stack = [{ node: root, sum: root.val }]
  let total = 0

  while (stack.length) {
    const { node, sum } = stack.pop()

    // 到达叶节点，累加路径和
    if (!node.left && !node.right) {
      total += sum;
      continue
    }

    // 右子树入栈
    if (node.right) {
      stack.push({
        node: node.right,
        sum: sum * 10 + node.right.val
      })
    }

    // 左子树入栈
    if (node.left) {
      stack.push({
        node: node.left,
        sum: sum * 10 + node.left.val
      })
    }
  }

  return total
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = sumNumbers;
// @after-stub-for-debug-end