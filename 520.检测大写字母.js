/*
 * @lc app=leetcode.cn id=520 lang=javascript
 *
 * [520] 检测大写字母
 */

// @lc code=start
/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
  // 全部字母都是大写
  if (isUpperCase(word)) {
    return true;
  }

  // 单词中所有字母都不是大写
  if (isLowerCase(word)) {
    return true;
  }


  // 首字母大写，后续字母都不是大写
  if (word[0] === word[0].toUpperCase() && isLowerCase(word.slice(1))) {
    return true;
  }

  // 其他情况都不符合大写用法规则
  return false;
};

function isUpperCase(char) {
  // 如果字符经过转换为大写后与原来的字符相同，则说明原字符是大写
  return char === char.toUpperCase();
}

function isLowerCase(word) {
  return word === word.toLowerCase();
}
// @lc code=end

