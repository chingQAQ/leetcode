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

test('expect input "A man, a plan, a canal: Panama", return true.', () => {
	const s = 'A man, a plan, a canal: Panama';
	const expected = true;
	const actual = isPalindrome(s);
	expect(actual).toEqual(expected);
});

test('expect input "race a car", return false.', () => {
	const s = 'race a car';
	const expected = false;
	const actual = isPalindrome(s);
	expect(actual).toEqual(expected);
});

test('expect input "ab_a", return true.', () => {
	const s = 'ab_a';
	const expected = true;
	const actual = isPalindrome(s);
	expect(actual).toEqual(expected);
});

test('expect input "0P", return false.', () => {
	const s = '0P';
	const expected = false;
	const actual = isPalindrome(s);
	expect(actual).toEqual(expected);
});

test('expect input "a", return true.', () => {
	const s = 'a';
	const expected = true;
	const actual = isPalindrome(s);
	expect(actual).toEqual(expected);
});

test('expect input "_a a", return true.', () => {
	const s = '_a a';
	const expected = true;
	const actual = isPalindrome(s);
	expect(actual).toEqual(expected);
});

test('expect input " ", return true.', () => {
	const s = ' ';
	const expected = true;
	const actual = isPalindrome(s);
	expect(actual).toEqual(expected);
});

export default isPalindrome;