/*
 * @lc app=leetcode id=119 lang=typescript
 *
 * [119] Pascal's Triangle II
 */

// @lc code=start
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

module.exports = getRow;
// @lc code=end

