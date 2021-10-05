const getRow = (rowIndex: number): number[] => {
  
};

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
