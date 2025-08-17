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

var mergeTwoLists = function (list1, list2) {
  if (!list1) {
    return list2
  }

  if (!list2) {
    return list1
  }

  const dummy = new ListNode(-1)
  let current = dummy

  while (list1 && list2) {
    if (list1.val < list2.val) {
      current.next = list1
      list1 = list1.next
    } else {
      current.next = list2
      list2 = list2.next
    }

    current = current.next
  }

  current.next = list1 ? list1 : list2

  return dummy.next
}


class ListNode {
  constructor(key, val) {
    this.val = val
    this.key = key
    this.next = null
    this.prev = null
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity
    this.cache = new Map()

    this.head = new ListNode()
    this.tail = new ListNode()

    this.head.next = this.tail
    this.tail.prev = this.head
  }

  get(key) {
    if (!this.cache.has(key)) {
      return -1
    }

    const node = this.cache.get(key)
    this.removeNode(node)
    this.addToHead(node)

    return node.val
  }

  put(key, value) {
    if (this.cache.has(key)) {
      const node = this.cache.get(key)

      node.val = value
      this.removeNode(node)
      this.addToHead(node)
    } else {
      if (this.cache.size >= this.capacity) {
        const tail = this.tail.prev
        this.removeNode(tail)
        this.cache.delete(tail.key)
      }

      const node = new ListNode(key, value)
      this.cache.set(key, node)
      this.addToHead(node)
    }
  }

  removeNode(node) {
    node.prev.next = node.next
    node.next.prev = node.prev
  }

  addToHead(node) {
    const next = this.head.next

    node.next = next
    node.prev = this.head

    next.prev = node
    this.head.next = node
  }
}

// @lc code=end

// @after-stub-for-debug-begin
module.exports = mergeTwoLists;
// @after-stub-for-debug-end