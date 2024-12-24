/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// https://algo.itcharge.cn/Solutions/0200-0299/reverse-linked-list/#%E6%80%9D%E8%B7%AF-1-%E8%BF%AD%E4%BB%A3
var reverseList = function (head) {
  let reversedList = null
  let current = head

  while (current) {
    const next = current.next
    current.next = reversedList
    reversedList = current
    current = next
  }

  return reversedList
};

var reverseList = function (head) {
  if (!head || !head.next) {
    return head
  }

  const newHead = reverseList(head.next)

  head.next.next = head
  head.next = null

  return newHead
}
// @lc code=end


// @after-stub-for-debug-begin
module.exports = reverseList;
// @after-stub-for-debug-end