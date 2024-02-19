/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  // 需要找到开始反转的前一个位置
  const dummy = new ListNode(0)
  dummy.next = head
  let pre = dummy
  let index = 1
  while (index < left) {
    pre = pre.next
    index++
  }

  // 收集反转好的链表
  let reversedList = null
  let current = pre.next

  while (left <= right) {
    const next = current.next
    current.next = reversedList
    reversedList = current
    current = next
    left++
  }

  // 尾部节点的连接
  pre.next.next = current
  pre.next = reversedList

  return dummy.next
};

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}
// @lc code=end


// @after-stub-for-debug-begin
module.exports = reverseBetween;
// @after-stub-for-debug-end