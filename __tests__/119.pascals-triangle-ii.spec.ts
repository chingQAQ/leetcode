const getRow = (rowIndex: number): number[] => {
  let ret: number[] = [1];
  if (rowIndex === 0) return ret;
  for (let i = 0; i < rowIndex; i++) {
    const prev = ret;
    const next = [];
    for (let j = 0; j < prev.length; j++) {
      const p1 = prev[j - 1] || 0;
      const p2 = prev[j];
      next[j] = p1 + p2;
    }
    next.push(1);
    ret = next;
  }
  return ret;
};

test('expect use rowIndex input 4, return [1,4,6,4,1].', () => {
  const rowIndex: number = 4;
  const expected = [1, 4, 6, 4, 1];
  const actual = getRow(rowIndex);

  expect(actual).toEqual(expected);
})

test('expect use rowIndex input 3, return [1,3,3,1].', () => {
  const rowIndex: number = 3;
  const expected = [1, 3, 3, 1];
  const actual = getRow(rowIndex);

  expect(actual).toEqual(expected);
})

test('expect use rowIndex input 0, return [1].', () => {
  const rowIndex: number = 0;
  const expected = [1];
  const actual = getRow(rowIndex);

  expect(actual).toEqual(expected);
})

test('expect use rowIndex input 1, return [1,1].', () => {
  const rowIndex: number = 1;
  const expected = [1, 1];
  const actual = getRow(rowIndex);

  expect(actual).toEqual(expected);
})

test('expect use rowIndex input 2, return [1,2,1].', () => {
  const rowIndex: number = 2;
  const expected = [1, 2, 1];
  const actual = getRow(rowIndex);

  expect(actual).toEqual(expected);
})

export default getRow;
