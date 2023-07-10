/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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

var inorderTraversal = function (root) {
  const result = []

  const traverse = (node) => {
    if (!node) {
      return
    }

    traverse(node.left)
    result.push(node.val)
    traverse(node.right)
  }

  traverse(root)

  return result

};

var inorderTraversal1 = function (root) {
  if (!root) {
    return []
  }

  let current = root
  const stack = []
  const result = []

  while (current || stack.length) {
    while (current) {
      stack.push(current)
      current = current.left
    }
    const node = stack.pop()
    result.push(node.val)
    current = node.right
  }

  return result

};
// @lc code=end

