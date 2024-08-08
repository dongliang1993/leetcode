/*
 * @lc app=leetcode.cn id=700 lang=javascript
 *
 * [700] 二叉搜索树中的搜索
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
 * @param {number} val
 * @return {TreeNode}
 */

// 对于这个问题，我们可以利用二叉搜索树的特性来高效地查找目标值。
// 在二叉搜索树中，对于任意节点，其左子树中的所有节点值都小于该节点的值，
// 右子树中的所有节点值都大于该节点的值。
var searchBST = function (root, val) {
  // 基本情况：如果根节点为空或者找到了目标值
  if (!root || root.val === val) {
    return root
  }

  // 如果目标值小于当前节点值，在左子树中查找
  if (root.val > val) {
    return searchBST(root.left, val)
  } else {
    // 如果目标值大于当前节点值，在右子树中查找
    return searchBST(root.right, val)
  }
};

// 迭代法
var searchBST = function (root, val) {
  if (!root || root.val === val) {
    return root
  }

  let current = root

  while (current) {
    if (current.val === val) {
      return current
    }

    if (current.val > val) {
      current = current.left
    } else {
      current = current.right
    }
  }

  return null
}
// @lc code=end

