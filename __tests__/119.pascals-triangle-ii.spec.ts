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

test('expect use rowIndex input 4, return [1,4,6,4,1].', () => {
	const rowIndex = 4;
	const expected = [
		1, 4, 6, 4, 1
	];
	const actual = getRow(rowIndex);
	expect(actual).toEqual(expected);
});

test('expect use rowIndex input 3, return [1,3,3,1].', () => {
	const rowIndex = 3;
	const expected = [1, 3, 3, 1];
	const actual = getRow(rowIndex);
	expect(actual).toEqual(expected);
});

test('expect use rowIndex input 0, return [1].', () => {
	const rowIndex = 0;
	const expected = [1];
	const actual = getRow(rowIndex);
	expect(actual).toEqual(expected);
});

test('expect use rowIndex input 1, return [1,1].', () => {
	const rowIndex = 1;
	const expected = [1, 1];
	const actual = getRow(rowIndex);
	expect(actual).toEqual(expected);
});

test('expect use rowIndex input 2, return [1,2,1].', () => {
	const rowIndex = 2;
	const expected = [1, 2, 1];
	const actual = getRow(rowIndex);
	expect(actual).toEqual(expected);
});

export default getRow;
