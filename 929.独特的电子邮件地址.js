/*
 * @lc app=leetcode.cn id=929 lang=javascript
 *
 * [929] 独特的电子邮件地址
 */

// @lc code=start
/**
 * @param {string[]} emails
 * @return {number}
 */
function getValidEmail(email) {
  const [local, domain] = email.split('@');
  const localName = local.split('+')[0].replace(/\./g, '');
  return `${localName}@${domain}`;
}

var numUniqueEmails = function (emails) {
  const emailSet = new Set();

  for (let i = 0; i < emails.length; i++) {
    const email = getValidEmail(emails[i]);
    emailSet.add(email);
  }

  return emailSet.size
};
// @lc code=end

