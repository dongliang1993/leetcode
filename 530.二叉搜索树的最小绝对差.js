/*
 * @lc app=leetcode.cn id=530 lang=javascript
 *
 * [530] 二叉搜索树的最小绝对差
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
var getMinimumDifference = function (root) {
  // 二叉搜索树中序遍历是一个递增的数组
  const result = []
  const stack = []

  while (root || stack.length) {
    while (root) {
      stack.push(root)
      root = root.left
    }

    const node = stack.pop()
    result.push(node.val)
    root = node.right
  }

  let minDiff = Infinity

  for (let i = 0; i < result.length - 1; i++) {
    minDiff = Math.min(result[i + 1] - result[i], minDiff)
  }

  return minDiff
};

// 双指针法
var getMinimumDifference = function (root) {
  let minDiff = Infinity
  let prev = null;

  function getMinimumDifferenceHelper(node) {
    if (!node) {
      return
    }

    getMinimumDifferenceHelper(node.left)

    // Process the current node
    if (prev !== null) {
      minDiff = Math.min(minDiff, node.val - prev.val);
    }
    prev = node;

    getMinimumDifferenceHelper(node.right)
  }

  getMinimumDifferenceHelper(root)

  return minDiff
}
// @lc code=end


// @after-stub-for-debug-begin
module.exports = getMinimumDifference;
// @after-stub-for-debug-end