/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
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
 * @return {boolean}
 */
// 使用额外的数组，然后双指针
var isPalindrome = function (head) {
  const nums = []
  let current = head

  while (current) {
    nums.push(current.val)
    current = current.next
  }

  let left = 0;
  let right = nums.length - 1

  while (left < right) {
    if (nums[left] !== nums[right]) {
      return false
    }

    left++
    right--
  }

  return true
}

var isPalindrome = function (head) {
  let slow = head
  let fast = head

  while (fast && fast.next) {
    fast = fast.next.next
    slow = slow.next
  }

  // 反转剩下的链表
  let prev = null

  while (slow) {
    let temp = slow.next
    slow.next = prev
    prev = slow
    slow = temp
  }

  // 检查是否是回文
  while (prev) {
    if (prev.val !== head.val) {
      return false
    }
    prev = prev.next
    head = head.next
  }

  return true
};
// @lc code=end



