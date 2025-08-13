/*
 * @lc app=leetcode.cn id=501 lang=javascript
 *
 * [501] 二叉搜索树中的众数
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
var findMode = function (root) {
  const nodeSumMap = new Map([])
  const stack = [root]
  let maxFreq = 0;

  while (stack.length) {
    const node = stack.pop()
    // 找出最大出现次数
    let count = 1

    // 更新 Map 中的计数
    if (nodeSumMap.has(node.val)) {
      count = nodeSumMap.get(node.val) + 1
    }

    nodeSumMap.set(node.val, count)
    maxFreq = Math.max(maxFreq, count)

    if (node.right) {
      stack.push(node.right)
    }

    if (node.left) {
      stack.push(node.left)
    }
  }

  // 收集所有出现次数等于最大次数的节点值
  const result = []

  nodeSumMap.forEach((val, key) => {
    if (val === maxFreq) {
      result.push(key)
    }
  })

  return result
};

var findMode = function (root) {
  let maxFreq = 0;
  let maxFreqNodes = []
  let currentCount = 0
  let prevNode = null

  // 中序遍历
  function inOrderTraverse(node) {
    if (!node) {
      return
    }

    inOrderTraverse(node.left)

    // 处理当前节点
    // 前一节点为空
    if (!prevNode) {
      currentCount = 1
    } else {
      if (prevNode.val === node.val) {
        currentCount += 1
      } else {
        currentCount = 1
      }
    }

    prevNode = node

    if (currentCount > maxFreq) {
      maxFreqNodes = [prevNode.val]
      maxFreq = currentCount
    } else if (currentCount === maxFreq) {
      maxFreqNodes.push(prevNode.val)
    }

    inOrderTraverse(node.right)
  }

  inOrderTraverse(root)

  return maxFreqNodes
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = findMode;
// @after-stub-for-debug-end