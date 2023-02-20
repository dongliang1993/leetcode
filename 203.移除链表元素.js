/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// function ListNode(val, next) {
//   this.val = (val === undefined ? 0 : val)
//   this.next = (next === undefined ? null : next)
// }

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  if (!head) {
    return null
  }

  const dummy = new ListNode(-1)
  dummy.next = head

  let pre = dummy

  while (pre.next) {
    if (pre.next.val === val) {
      pre.next = pre.next.next
    } else {
      pre = pre.next
    }
  }

  return dummy.next
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = removeElements;
// @after-stub-for-debug-end