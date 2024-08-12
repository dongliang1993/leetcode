/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  // 对数组进行排序
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  let childIndex = 0;
  let cookieIndex = 0;
  let contentChildren = 0;

  // 遍历饼干数组
  while (childIndex < g.length && cookieIndex < s.length) {
    // 如果当前饼干可以满足当前孩子
    if (s[cookieIndex] >= g[childIndex]) {
      contentChildren++;
      childIndex++;
    }
    cookieIndex++;
  }

  return contentChildren;
};
// @lc code=end

