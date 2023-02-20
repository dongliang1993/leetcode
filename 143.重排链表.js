/*
 * @lc app=leetcode.cn id=143 lang=javascript
 *
 * [143] 重排链表
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
 * @return {void} Do not return anything, modify head in-place instead.
 */

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}
var reorderList = function (head) {
  // 将链表根据下标进行分组
  let slow = head
  let fast = head
  const fastNodes = []
  while (fast && fast.next) {
    fastNodes.push(slow)
    fast = fast.next.next
    slow = slow.next
  }

  // slow 是中间节点
  // slow.next 是后一半

  if (!slow.next) {
    return slow
  }

  // 后一半
  const lastNodes = []
  let current = slow
  // .next

  while (current) {
    lastNodes.push(current)
    current = current.next
  }

  const dummy = new ListNode(-1)
  current = dummy

  while (fastNodes.length || lastNodes.length) {
    const fastNode = fastNodes.shift()
    const node = lastNodes.pop()
    if (fastNode) {
      current.next = fastNode
      current = current.next
    }

    if (node) {
      current.next = node
      current = current.next
    }
  }

  if (current) {
    current.next = null
  }
  return dummy.next
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = reorderList;
// @after-stub-for-debug-end