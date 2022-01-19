/*
 * @lc app=leetcode id=136 lang=typescript
 *
 * [136] Single Number
 */

// @lc code=start

// n(1) solution
function singleNumber(nums: number[]): number {
	const stack = [];

	for (let index = 0; index < nums.length; index++) {
		const searchIndex = stack.indexOf(nums[index]);

		if (searchIndex === -1) {
			stack.push(nums[index]);
		} else {
			stack.splice(searchIndex, 1);
		}
	}

	return stack[0];
}

// n(o) solution
// function singleNumber(nums: number[]): number {
// 	let ret = 0;

// 	for (let i = 0; i < nums.length; i++) {
// 		ret ^= nums[i];
// 	}

// 	return ret;
// }
// @lc code=end

module.exports = singleNumber;
