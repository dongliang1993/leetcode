/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
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
var deleteDuplicates = function (head) {
  let current = head
  // 如果有当前节点和下一个节点，进入循环
  // 反过来就是说，如果只有一个节点或者没有节点，直接返回
  while (current && current.next) {
    const next = current.next
    // 检查下一个节点是不是和当前节点重复
    if (current.val === next.val) {
      current.next = next.next
    } else {
      current = next
    }
  }

  return head
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = deleteDuplicates;
// @after-stub-for-debug-end