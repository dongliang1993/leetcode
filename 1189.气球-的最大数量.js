/*
 * @lc app=leetcode.cn id=1189 lang=javascript
 *
 * [1189] “气球” 的最大数量
 */

// @lc code=start
/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function (text) {
  const charMap = new Map();
  const balloonMap = new Map([
    ['b', 1],
    ['a', 1],
    ['l', 2],
    ['o', 2],
    ['n', 1],
  ]);

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (charMap.has(char)) {
      charMap.set(char, charMap.get(char) + 1);
    } else {
      charMap.set(char, 1);
    }
  }

  let min = Infinity;
  for (const [key, value] of balloonMap) {
    const count = charMap.get(key) || 0;
    min = Math.min(min, Math.floor(count / value));
  }
  return min;
};
// @lc code=end

