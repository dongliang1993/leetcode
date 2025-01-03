/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

var swapPairs = function (head) {
  // 如果链表为空或者只有一个节点，直接返回原链表
  if (!head || !head.next) {
    return head
  }

  // 创建一个哑节点指向头节点
  const dummy = new ListNode(-1)
  dummy.next = head

  let current = dummy

  while (current.next && current.next.next) {
    const prev = current.next
    const fast = current.next.next

    prev.next = fast.next
    fast.next = prev
    current.next = fast

    current = prev
  }

  return dummy.next
};

var swapPairs = function (head) {
  // 如果链表为空或者只有一个节点，直接返回原链表
  if (!head || !head.next) {
    return head
  }

  const first = head
  const second = head.next

  first.next = swapPairs(second.next)
  second.next = first

  return second
}

var swapPairs = function (head) {
  if (!head || !head.next) {
    return head
  }

  const dummy = new ListNode(-1)
  dummy.next = head

  let current = dummy

  while (current.next && current.next.next) {
    const first = current.next
    const second = current.next.next

    first.next = second.next
    second.next = first
    current.next = second

    current = first
  }

  return dummy.next
}
// @lc code=end


// @after-stub-for-debug-begin
module.exports = swapPairs;
// @after-stub-for-debug-end