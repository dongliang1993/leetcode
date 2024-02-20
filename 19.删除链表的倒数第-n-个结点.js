/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  // 创建一个虚拟头节点，以处理删除头节点的情况
  const dummy = new ListNode(0);
  dummy.next = head;
  let fast = dummy;
  let slow = dummy;

  // 快指针先移动 n+1 步，因为要删除的是倒数第 n 个节点的前一个节点
  for (let i = 0; i <= n; i++) {
    fast = fast.next;
  }

  // 让快指针和慢指针每次同时前进一步
  // 直到快指针到最后
  while (fast) {
    fast = fast.next
    slow = slow.next
  }

  // 删除倒数第 n 个节点
  slow.next = slow.next.next

  // 返回链表的头结点
  return dummy.next
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}

var removeNthFromEnd1 = function (head, n) {
  if (!head || !head.next) {
    return null;
  }

  const dummyHead = new ListNode(-1)
  dummyHead.next = head

  // 计算出链表的长度
  let pre = head
  let l = 0

  while (pre) {
    pre = pre.next
    l = l + 1
  }

  let current = dummyHead
  // 需要走到待删除节点的上一个节点
  let step = l - n

  while (step) {
    current = current.next
    step = step - 1
  }

  current.next = current.next.next

  return dummyHead.next


}
// @after-stub-for-debug-begin
module.exports = removeNthFromEnd;
// @after-stub-for-debug-end