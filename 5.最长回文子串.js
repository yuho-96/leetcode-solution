/*
 * @Author: liuyuhao
 * @Date: 2023-01-06 14:53:27
 * @LastEditors: liuyuhao
 * @LastEditTime: 2023-01-29 17:19:26
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  console.log(s)
  const len = s.length

  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j <= len; j++) {
      console.log()
    }
  }

  const isPalindrome = (t = '') => {
    if (t.length < 2) {
      return true
    } else if (t[0]) {
    }
  }
}
// @lc code=end
