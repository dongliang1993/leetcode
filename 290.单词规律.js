/*
 * @lc app=leetcode.cn id=290 lang=javascript
 *
 * [290] 单词规律
 */

// @lc code=start
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  const arr = s.split(' ');
  // 1. 如果长度不一致，直接返回false
  if (pattern.length !== arr.length) {
    return false;
  }

  // 双向映射：除了判断 pattern 到 s 的映射外，
  // 还应该判断 s 到 pattern 的映射，确保是双向的，
  // 因为题目要求是双向连接的对应规律。
  // 比如：
  // "abba"
  // "dog dog dog dog"
  // 2. 用两个map分别存储pattern和s的对应关系
  const patternMap = new Map();
  const sMap = new Map();

  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i];
    const word = arr[i];
    // 如果pattenMap中没有这个key，就添加进去
    if (!patternMap.has(char) && !sMap.has(word)) {
      patternMap.set(char, word);
      sMap.set(word, char);
    } else {
      // 如果pattenMap中有这个key，就判断对应的值是否相等
      if (patternMap.get(char) !== word || sMap.get(word) !== char) {
        return false;
      }
    }
  }

  return true
};
// @lc code=end

