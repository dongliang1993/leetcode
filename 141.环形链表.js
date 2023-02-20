/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
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
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  if (!head || !head.next) {
    return false;
  }

  let slow = head
  let fast = head.next

  while (slow !== fast) {
    if (!fast || !fast.next) {
      return false
    }

    slow = slow.next
    fast = fast.next.next
  }

  return true
};

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle1 = function (head) {
  if (!head) {
    return false;
  }

  const set = new Set();
  let current = head

  while (current) {
    if (set.has(current)) {
      return true
    }

    set.add(current);
    current = current.next;
  }

  return false
};
// @lc code=end

