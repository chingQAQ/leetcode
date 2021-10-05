type NumberArray = number[][];

interface Generate {
  (numRows: number, ret?: NumberArray): NumberArray;
}

const generate: Generate = (numRows: number, ret?: NumberArray): NumberArray => {
  if (ret == null) {
    return generate(numRows, [[1]]);
  }

  if (ret.length === numRows) return ret;
  
  const last: number[] = ret[ret.length - 1];
  const newArr: number[] = [];

  for (let i = 0, j = 0; i < ret.length;) {
    if ( i === j ) {
      newArr.push(last[j]);
      j++;
      continue;
    }

    if (i === ret.length - 1) {
      newArr.push(last[i]);
    } else {
      newArr.push(last[i] + last[j]);
    }

    i++;
    j++;
  }

  ret.push(newArr);

  return generate(numRows, ret);
};

test('expect use numRows input 5, return [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]].', () => {
  const numRows: number = 5;
  const expected = [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]];
  const actual = generate(numRows);

  expect(actual).toEqual(expected);
})

test('expect use numRows input 1, return [[1]].', () => {
  const numRows: number = 1;
  const expected = [[1]];
  const actual = generate(numRows);

  expect(actual).toEqual(expected);
})

test('expect use numRows input 6, return [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]], [1, 5, 10, 10, 5, 1]].', () => {
  const numRows: number = 6;
  const expected = [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1], [1, 5, 10, 10, 5, 1]];
  const actual = generate(numRows);

  expect(actual).toEqual(expected);
})

export default generate;
