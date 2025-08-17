/*
 * @lc app=leetcode.cn id=946 lang=javascript
 *
 * [946] 验证栈序列
 */

// @lc code=start
/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
  const stack = []
  let index = 0 // 指向 popped 的当前位置

  for (let i = 0; i < pushed.length; i++) {
    const cur = pushed[i]
    stack.push(cur)

    while (stack.length && stack[stack.length - 1] === popped[index]) {
      index++
      stack.pop()
    }
  }

  return stack.length === 0
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = validateStackSequences;
// @after-stub-for-debug-end