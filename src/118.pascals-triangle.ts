/*
 * @lc app=leetcode id=118 lang=typescript
 *
 * [118] Pascal's Triangle
 */

// @lc code=start
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
    if (i === j) {
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

module.exports = generate;

// @lc code=end

