const { tableTest } = require('../unit-test');
const { calculateFuelCost, calculateFuelCostIncludingFuel } = require('../fuel-cost');

describe('calculateFuelCost', () => {
  const conditions = [
    { input: [12], expected: 2 },
    { input: [14], expected: 2 },
    { input: [1969], expected: 654 },
    { input: [100756], expected: 33583 },
  ];

  tableTest(conditions, calculateFuelCost);
});

describe('calculateFuelCostIncludingFuel', () => {
  const conditions = [
    { input: [14], expected: 2 },
    { input: [1969], expected: 966 },
    { input: [100756], expected: 50346 }
  ];

  tableTest(conditions, calculateFuelCostIncludingFuel)
});
