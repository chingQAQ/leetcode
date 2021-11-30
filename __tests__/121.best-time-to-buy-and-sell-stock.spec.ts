function maxProfit(prices: number[]): number {
  let minPrice = Number.MAX_SAFE_INTEGER;
  let profit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    }

    const sub = prices[i] - minPrice;

    if (sub > profit) {
      profit = sub;
    }
  }

  return profit;
};

test('expect input [7,1,5,3,6,4], return 5.', () => {
  const price = [7, 1, 5, 3, 6, 4];
  const expected = 5;
  const actual = maxProfit(price);
  expect(actual).toEqual(expected);
});

test('expect input [7,6,4,3,1], return 0.', () => {
  const price = [7, 6, 4, 3, 1];
  const expected = 0;
  const actual = maxProfit(price);
  expect(actual).toEqual(expected);
});


test('expect input [1,2,4,3,1], return 3.', () => {
  const price = [1, 2, 4, 3, 1];
  const expected = 3;
  const actual = maxProfit(price);
  expect(actual).toEqual(expected);
});

export default maxProfit;