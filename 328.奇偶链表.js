/*
 * @lc app=leetcode.cn id=328 lang=javascript
 *
 * [328] 奇偶链表
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

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

// https://leetcode.cn/problems/odd-even-linked-list/solutions/482737/qi-ou-lian-biao-by-leetcode-solution/
var oddEvenList = function (head) {
  if (!head) {
    return head
  }
  // 奇数节点
  let odd = head
  // 偶数节点
  let even = head.next
  // 偶数节点的头节点
  let evenHead = even

  while (even && even.next) {
    // 偶数节点后面一定是奇数节点
    // 将后面一个连接到当前奇数节点后面
    odd.next = even.next
    // 将奇数节点前进到下一个奇数节点
    odd = odd.next

    // 偶数位置节点指向下一个偶数位置节点
    even.next = odd.next
    // 更新偶数位置节点
    even = even.next
  }

  // 将偶数节点放在奇数节点后面
  odd.next = evenHead

  return head
};

// 暴力法
var oddEvenList1 = function (head) {
  // 将奇数偶数进行分组
  const oddList = []
  const evenList = []
  let current = head
  let count = 1

  while (current) {
    if (count % 2 === 0) {
      evenList.push(current)
    } else {
      oddList.push(current)
    }
    count += 1
    current = current.next
  }

  // 将奇数节点连接到偶数节点后面
  const total = [...oddList, ...evenList]
  const result = new ListNode(-1)
  current = result

  for (let i = 0; i < total.length; i++) {
    current.next = total[i]
    current = current.next
  }

  // 可能会有循环引用，所以最后一个节点进行置空
  current.next = null

  return result.next
};

var oddEvenList = function (head) {
  let oddNode = head
  let evenNode = head.next

  while (evenNode && evenNode.next) {
    oddNode.next = evenNode.next
    oddNode = oddNode.next

    const lastOdd = evenHead.next
    lastOdd.next = evenHead
    oddHead.next = lastOdd

  }
}

// @lc code=end


// @after-stub-for-debug-begin
module.exports = oddEvenList;
// @after-stub-for-debug-end