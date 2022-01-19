/*
 * @lc app=leetcode id=125 lang=typescript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
function isPalindrome(s: string): boolean {
	const r = s.replace(/[^a-z0-9]+/gi, '').toLowerCase();
	let count = r.length - 1;

	if (count <= -Infinity) { return true; }

	for (let i = 0; i < r.length; i++) {
		if (r[i] !== r[count]) {
			return false;
		}

		count--;
	}

	return true;
}

module.exports = isPalindrome;
// @lc code=end
