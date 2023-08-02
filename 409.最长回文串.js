/*
 * @lc app=leetcode.cn id=409 lang=javascript
 *
 * [409] 最长回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */

// 要构造最长的回文串，我们可以统计字符串 s 中每个字符出现的频率。
// 回文串的特点是字符出现次数为偶数的字符可以全部用来构造回文串，
// 而出现次数为奇数的字符可以选取其中的偶数部分来构造回文串，
// 最中间还可以放一个字符（如果有的话）。
var longestPalindrome = function (s) {
  // 创建一个字母频率的映射，用来统计字符串 s 中每个字符出现的次数。
  const map = new Map();
  let res = 0;
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    // 偶数部分可以用来构造回文串
    if (map.has(char)) {
      res += 2;
      map.delete(char);
    } else {
      map.set(char, 1);
    }
  }
  return res + (map.size > 0 ? 1 : 0);
};
// @lc code=end

