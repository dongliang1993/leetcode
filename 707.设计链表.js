/*
 * @lc app=leetcode.cn id=707 lang=javascript
 *
 * [707] 设计链表
 */

// @lc code=start

var ListNode = function (val) {
  this.val = val
  this.next = null
};

var MyLinkedList = function () {
  this.data = null
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  let current = this.data
  let i = 0

  while (i < index) {
    i++
    current = current ? current.next : null
  }

  return current ? current.val : -1
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  const node = new ListNode(val)
  node.next = this.data
  this.data = node
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  let current = this.data
  if (!current) {
    this.data = new ListNode(val)
    return
  }

  while (current.next) {
    current = current.next
  }

  current.next = new ListNode(val)
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  const dummy = new ListNode(null)
  dummy.next = this.data

  let prev = dummy
  let current = this.data
  let i = 0

  while (i < index) {
    i++
    if (current === null) {
      return
    }
    current = current.next
    prev = prev.next
  }

  const node = new ListNode(val)
  prev.next = node
  node.next = current
  this.data = dummy.next
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  const dummy = new ListNode(null)
  dummy.next = this.data

  let prev = dummy
  let current = this.data
  let i = 0

  while (i < index) {
    i++
    if (current === null) {
      return
    }
    current = current.next
    prev = prev.next
  }

  prev.next = current ? current.next : null
  this.data = dummy.next
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
// @lc code=end

