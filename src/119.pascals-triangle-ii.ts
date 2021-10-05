/*
 * @lc app=leetcode id=119 lang=typescript
 *
 * [119] Pascal's Triangle II
 */

// @lc code=start
const getRow = (rowIndex: number): number[] => {
	const ret: number[] = [1];

	if (rowIndex === 0) { return ret; }

	for (let i = 0; i < rowIndex; i++) {
		let prev = ret[0];

		for (let j = 1; j <= i; j++) {
			const cur = ret[j];
			ret[j] = cur + prev;
			prev = cur;
		}

		ret.push(1);
	}

	return ret;
};

module.exports = getRow;
// @lc code=end
