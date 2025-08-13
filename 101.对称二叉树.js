/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
var isSymmetric = function (root) {

  // 辅助函数：比对两个子树是否镜像
  function isMirror(left, right) {
    // 如果两个子节点都为空，说明对称
    if (!left && !right) {
      return true;
    }

    // 如果其中一个为空，说明不对称
    if (!left || !right) {
      return false;
    }

    // 如果当前两个节点值不同，说明不对称
    if (left.val !== right.val) {
      return false
    }

    // 递归比较子节点：
    // 左子树的左节点 vs 右子树的右节点
    // 左子树的右节点 vs 右子树的左节点
    return isMirror(left.left, right.right) && isMirror(left.right, right.left)
  }

  // 空树被认为是对称的
  if (!root) {
    return true;
  }

  // 检查根节点的左右子树是否对称
  return isMirror(root.left, root.right)
};

var isSymmetric = function (root) {
  if (!root) {
    return true
  }

  const queue = [[root.left, root.right]]

  while (queue.length) {
    const [left, right] = queue.shift()

    if (!left && !right) {
      continue
    }

    if (!left || !right) {
      return false
    }

    if (left.val !== right.val) {
      return false
    }

    queue.push([left.left, right.right])
    queue.push([left.right, right.left])
  }

  return true
}
// @lc code=end


// @after-stub-for-debug-begin
module.exports = isSymmetric;
// @after-stub-for-debug-end