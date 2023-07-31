/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// 对数组进行两次遍历。
// 在第一次遍历中，我们将数组中所有的 0 交换到数组的头部。
// 在第二次遍历中，我们将数组中所有的 1 交换到头部的 0 之后。
// 此时，所有的 2 都出现在数组的尾部，这样我们就完成了排序。

function swap(nums, i, j) {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

var sortColors = function (nums) {
  // 头部
  let head = 0;
  for (let i = 0; i < nums.length; i++) {
    // 需要将 0 与「头部」位置的元素进行交换
    if (nums[i] === 0) {
      swap(nums, head, i);
      head++;
    }
  }

  for (let i = head; i < nums.length; i++) {
    if (nums[i] === 1) {
      swap(nums, head, i);
      head++;
    }
  }
};

// 0 挪到最前面，2 挪到最后面

var sortColors = function (nums) {
  // 头部
  let head = 0;
  // 尾部
  let tail = nums.length - 1;

  for (let i = 0; i <= tail; i++) {
    const current = nums[i];
    if (current === 0) {
      swap(nums, head, i);
      head++;
    }

    if (current === 2) {
      swap(nums, tail, i);
      tail--;
      // 2 挪完如果换出来的不是 1，那么指针要回退，因为 0 和 2 都是需要再次移动的
      if (nums[i] != 1) {
        --i;
      }
    }
  }
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = sortColors;
// @after-stub-for-debug-end