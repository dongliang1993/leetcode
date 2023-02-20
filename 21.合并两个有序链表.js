/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

var mergeTwoLists = function (list1, list2) {
  let l1 = list1;
  let l2 = list2;

  const dummy = new ListNode(-1);
  let current = dummy;

  while (l1 && l2) {
    if (l2.val <= l1.val) {
      current.next = l2
      l2 = l2.next
      current = current.next
    } else if (l2.val > l1.val) {
      current.next = l1
      l1 = l1.next
      current = current.next
    }
  }

  current.next = l1 ? l1 : l2

  return dummy.next
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = mergeTwoLists;
// @after-stub-for-debug-end