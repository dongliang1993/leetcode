/*
 * @lc app=leetcode.cn id=451 lang=javascript
 *
 * [451] 根据字符出现频率排序
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  const freqMap = new Map()

  for (const char of s) {
    const count = freqMap.get(char) || 0
    freqMap.set(char, count + 1)
  }

  const sorted = [...freqMap.entries()].sort((a, b) => b[1] - a[1]).map(([char, count]) => char.repeat(count));

  return sorted.join('')
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = frequencySort;
// @after-stub-for-debug-end