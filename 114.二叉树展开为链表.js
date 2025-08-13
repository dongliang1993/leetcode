/*
 * @lc app=leetcode.cn id=114 lang=javascript
 *
 * [114] 二叉树展开为链表
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  if (!root) {
    return null
  }

  const stack = [root]
  // 对树进行前序遍历，使用额外的变量构建一个新链表
  let linkList = []

  while (stack.length) {
    const node = stack.pop()
    linkList.push(node)

    if (node.right) {
      stack.push(node.right)
    }

    if (node.left) {
      stack.push(node.left)
    }
  }

  // 构建单链表
  for (let i = 0; i < linkList.length - 1; i++) {
    const node = linkList[i]
    const next = linkList[i + 1] || null

    node.right = next
    node.left = null
  }

  return linkList[0]
};

var flatten = function (root) {
  if (!root) {
    return null
  }

  const stack = [root]
  // 构建单链表
  // 想使用额外的 linkList 以及为了节省空间，可以在前序遍历过程中直接修改节点指针，这样节省 O(N) 的空间复杂度。
  let prev = null

  while (stack.length) {
    const node = stack.pop()

    if (prev) {
      prev.right = node
      prev.left = null
    }

    if (node.right) {
      stack.push(node.right)
    }

    if (node.left) {
      stack.push(node.left)
    }

    prev = node
  }

  return root
};


// 递归方法
var flatten = function (root) {
  if (!root) {
    return null
  }

  if (!root.left && !root.right) {
    return root
  }

  flatten(root.left)
  flatten(root.right)

  // 保存当前的右子树
  let rightSubtree = root.right;

  // 将左子树作为右子树
  root.right = root.left;
  root.left = null;

  // 寻找新的右子树的末端
  let current = root;
  while (current.right) {
    current = current.right;
  }

  // 将原右子树接到当前右子树的末端
  current.right = rightSubtree;

  return root
};
[1, 2, 5, 3, 4, null, 6]
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

var flatten = function (root) {
  if (!root) {
    return null
  }

  const stack = [root]
  const dummy = new TreeNode(-1)
  let current = dummy

  while (stack.length) {
    const node = stack.pop()

    // 重新构建单链表
    current.right = node;
    current.left = null; // 确保左指针始终为空
    current = current.right;

    // 先入栈右子节点，再入栈左子节点，保证前序遍历顺序
    if (node.right) {
      stack.push(node.right)
    }

    if (node.left) {
      stack.push(node.left)
    }
  }

  return dummy.next
}
// @lc code=end


// @after-stub-for-debug-begin
module.exports = flatten;
// @after-stub-for-debug-end