/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  // 1. 递归终止条件：如果根节点为空，直接返回 null
  if (!root) {
    return null;
  }

  // 递归调用，反转左子树和右子树

  // 反转左子树并返回新的左子树根节点
  const left = invertTree(root.left);
  // 反转右子树并返回新的右子树根节点
  const right = invertTree(root.right);

  // 将左右子树交换
  root.left = right;
  root.right = left;

  // 返回当前的根节点
  // 这个函数是在处理当前节点 root 的左右子树都已经完成递归调用、获取了反转后的左右子树之后，
  // 再做左右子树的交换操作的，因此这是后序遍历。
  return root;
};
// @lc code=end

