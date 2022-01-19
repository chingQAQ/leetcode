// n(1) solution
// function singleNumber(nums: number[]): number {
// 	let ret = 0;

// 	for (let i = 0; i < nums.length; i++) {
// 		ret ^= nums[i];
// 	}

// 	return ret;
// }

// n(o) solution
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

test('expect input [2,2,1], return 1.', () => {
	const nums = [2, 2, 1];
	const expected = 1;
	const actual = singleNumber(nums);
	expect(actual).toEqual(expected);
});

test('expect input [4,1,2,1,2], return 4.', () => {
	const nums = [
		4, 1, 2, 1, 2
	];
	const expected = 4;
	const actual = singleNumber(nums);
	expect(actual).toEqual(expected);
});

test('expect input [1,1,2]], return 4.', () => {
	const nums = [1, 1, 2];
	const expected = 2;
	const actual = singleNumber(nums);
	expect(actual).toEqual(expected);
});

test('expect input [1], return 1.', () => {
	const nums = [1];
	const expected = 1;
	const actual = singleNumber(nums);
	expect(actual).toEqual(expected);
});

export default singleNumber;