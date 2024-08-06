/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
 * @return {boolean}
 */
var isValidBST = function (root) {
  function isValidBSTHelper(node, maxVal, minVal) {
    if (!node) {
      return true
    }

    if (node.val >= maxVal || node.val <= minVal) {
      return false
    }

    return isValidBSTHelper(node.left, node.val, minVal) && isValidBSTHelper(node.right, maxVal, node.val)
  }

  return isValidBSTHelper(root, Infinity, -Infinity)
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = isValidBST;
// @after-stub-for-debug-end