/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
var preorderTraversal = function (root) {
  // 二叉树为空直接返回
  if (!root) {
    return [];
  }

  const result = []
  const stack = [root];

  // 栈不为空时，循环遍历
  while (stack.length) {
    // 弹出根节点
    const node = stack.pop();
    // 访问根节点
    result.push(node.val);

    // 先压入右子树，再压入左子树，保证左子树先遍历
    if (node.right) {
      stack.push(node.right)
    }

    if (node.left) {
      stack.push(node.left)
    }
  }

  return result
};


var preorderTraversal = function (root) {
  const result = []

  function traversal(node) {
    if (!node) {
      return
    }

    result.push(node.val)
    traverse(node.left)
    traverse(node.right)
  }

  traversal(root)

  return result
};

// @lc code=end

