/*
 * @lc app=leetcode.cn id=148 lang=javascript
 *
 * [148] 排序链表
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
// 暴力法就是遍历链表,然后将每一个节点放在 stack 中
// 然后将 stack 内的节点按照 val 进行升序排列
// 最后再组成一条完整的链表
var sortList = function (head) {
  const stack = []

  let current = head
  while (current) {
    stack.push(current)
    current = current.next
  }

  stack.sort((a, b) => b.val - a.val)

  const dummy = new ListNode(-1)
  current = dummy

  while (stack.length) {
    const node = stack.pop()
    current.next = node
    current = current.next
  }

  current.next = null

  return dummy.next
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = sortList;
// @after-stub-for-debug-end