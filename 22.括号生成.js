/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const result = []
  const path = []

  function backtracking() {
    if (path.length === 2 * n) {
      result.push(path.join(''))
      return
    }

    if (path.length === 0) {
      path.push('(')
      backtracking()
    } else {
      // 左括号和右括号的数量不能超过n
      const leftCount = path.filter(item => item === '(').length
      const rightCount = path.filter(item => item === ')').length

      if (path.filter(item => item === '(').length < n) {
        path.push('(')
        backtracking()
        path.pop()
      }

      // 右括号的数量不能超过左括号
      if (rightCount < n && rightCount < leftCount) {
        path.push(')')
        backtracking()
        path.pop()
      }
    }
  }

  backtracking()

  return result
};

var generateParenthesis = function (n) {
  const result = [];

  function backtrack(leftCount, rightCount, str) {
    if (str.length === 2 * n) {
      // 直接使用字符串 str 来构建括号组合
      result.push(str);
      return;
    }

    if (leftCount < n) {
      backtrack(leftCount + 1, rightCount, str + '(');
    }

    if (rightCount < leftCount) {
      backtrack(leftCount, rightCount + 1, str + ')');
    }
  }

  // 我们直接传递 leftCount 和 rightCount 作为参数，避免了重复计算
  backtrack(0, 0, '');
  return result;
};

// @lc code=end


// @after-stub-for-debug-begin
module.exports = generateParenthesis;
// @after-stub-for-debug-end