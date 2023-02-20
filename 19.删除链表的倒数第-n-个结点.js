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
  // 因为 n 是有效的，所以不会出现只有一个节点但是删除 5 这种情况
  // 所以如果只有一个节点时，就是删掉自己
  if (!head || !head.next) {
    return null
  }

  let fast = head
  let slow = head

  // 让快指针领先 n 步
  for (let i = 0; i < n; i++) {
    fast = fast.next
  }

  // 如果快指针走到了最后，意味着是删除头节点
  if (fast === null) {
    return head.next
  }

  // 让快指针和慢指针每次同时前进一步
  // 直到快指针到最后
  while (fast.next) {
    fast = fast.next
    slow = slow.next
  }

  slow.next = slow.next.next

  // 返回链表的头结点
  return head

};

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