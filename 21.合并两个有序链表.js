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
  // 处理边界情况
  if (!list1) {
    return list2;
  }

  if (!list2) {
    return list1;
  }

  const dummy = new ListNode(-1);
  let current = dummy;

  while (list1 && list2) {
    if (list2.val <= list1.val) {
      current.next = list2
      list2 = list2.next
    } else if (list2.val > list1.val) {
      current.next = list1
      list1 = list1.next
    }

    current = current.next
  }

  // 处理剩余节点
  current.next = list1 ? list1 : list2

  return dummy.next
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = mergeTwoLists;
// @after-stub-for-debug-end