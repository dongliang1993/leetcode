/*
 * @lc app=leetcode.cn id=237 lang=javascript
 *
 * [237] 删除链表中的节点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
// https://leetcode.cn/problems/delete-node-in-a-linked-list/solutions/47948/tu-jie-shan-chu-lian-biao-zhong-de-jie-dian-python/
var deleteNode = function (node) {
  node.val = node.next.val
  node.next = node.next.next
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = deleteNode;
// @after-stub-for-debug-end