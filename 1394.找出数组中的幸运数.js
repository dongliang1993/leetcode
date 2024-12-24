/*
 * @lc app=leetcode.cn id=1394 lang=javascript
 *
 * [1394] 找出数组中的幸运数
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function (arr) {
  // 创建一个哈希映射来存储每个数字出现的次数
  const hashMap = new Map([])

  // 遍历数组，统计每个数字出现的次数
  for (let num of arr) {
    if (hashMap.has(num)) {
      hashMap.set(num, hashMap.get(num) + 1)
    } else {
      hashMap.set(num, 1)
    }
  }

  // 初始化结果为-1，表示未找到幸运数
  let result = -1

  // 筛选幸运数
  hashMap.forEach((value, key) => {
    // 如果数字的值等于其出现的次数，并且该数字大于当前结果
    if (key === value && key > result) {
      result = key
    }
  })

  return result
};
// @lc code=end

