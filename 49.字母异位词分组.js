/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
function sortStr(str) {
  return str.split('').sort().join('')
}
// 由于互为字母异位词的两个字符串包含的字母相同，
// 因此对两个字符串分别进行排序之后得到的字符串一定是相同的，
// 故可以将排序之后的字符串作为哈希表的键。
var groupAnagrams = function (strs) {
  const hashMap = new Map()

  for (let i = 0; i < strs.length; i++) {
    const sortedStr = sortStr(strs[i])
    if (hashMap.has(sortedStr)) {
      hashMap.get(sortedStr).push(strs[i])
    } else {
      hashMap.set(sortedStr, [strs[i]])
    }
  }
  console.log(hashMap.values())
  return Array.from(hashMap.values())
};
// @lc code=end

