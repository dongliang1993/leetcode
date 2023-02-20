/*
 * @lc app=leetcode.cn id=876 lang=javascript
 *
 * [876] 链表的中间结点
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
var middleNode = function (head) {
  let slow = head
  let fast = head

  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }

  return slow
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode1 = function (head) {
  let total = 0
  let current = head

  while (current) {
    total += 1
    current = current.next
  }

  let count = 0
  current = head
  while (count < parseInt(total / 2)) {
    count += 1
    current = current.next
  }

  return current
};
// @lc code=end

