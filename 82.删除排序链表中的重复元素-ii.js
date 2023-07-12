/*
 * @lc app=leetcode.cn id=82 lang=javascript
 *
 * [82] 删除排序链表中的重复元素 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.

 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

var deleteDuplicates = function (head) {
  const dummy = new ListNode(null);
  dummy.next = head;

  let prev = dummy;
  let current = head;

  while (current) {
    let right = current.next;
    if (right && current.val === right.val) {
      // 找到重复节点的最后一个节点
      while (right && current.val === right.val) {
        right = right.next;
      }
      // 跳过重复的节点
      current = right;
      prev.next = current;
    } else {
      // 不重复，更新 prev 的下一个节点，并继续向后遍历
      prev = prev.next;
      current = current.next;
    }
  }

  return dummy.next;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = deleteDuplicates;
// @after-stub-for-debug-end