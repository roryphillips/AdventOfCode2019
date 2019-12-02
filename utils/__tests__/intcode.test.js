const { tableTest } = require('../unit-test');
const { evaluateIntCode, bruteForceInputs } = require('../intcode');

describe('intcode', () => {
  describe('evaluateIntCode', () => {
    const conditions = [
      {
        input: [[
          1, 0, 0, 0,
          99
        ]],
        expected: [
          2, 0, 0, 0,
          99
        ]
      },
      {
        input: [[
          2, 3, 0, 3,
          99
        ]],
        expected: [
          2, 3, 0, 6,
          99
        ]
      },
      {
        input: [[
          2, 4, 4, 5,
          99, 0
        ]],
        expected: [
          2, 4, 4, 5,
          99, 9801
        ]
      },
      {
        input: [[
          1, 1, 1, 4,
          99, 5, 6, 0,
          99
        ]],
        expected: [
          30, 1, 1, 4,
          2, 5, 6, 0,
          99
        ]
      },
      {
        input: [[
          1, 9, 10, 3,
          2, 3, 11, 0,
          99, 30, 40, 50
        ]],
        expected: [
          3500, 9, 10, 70,
          2, 3, 11, 0,
          99, 30, 40, 50
        ]
      }
    ];

    tableTest(conditions, evaluateIntCode, 'toStrictEqual');
  });
  describe('bruteForceInputs', () => {
    const conditions = [
      {
        input: [
          /*
            This is basic intcode program to multiply the values in memory locations 5 and 20
            The numbers in these locations are prime, and different to the target addresses
            This should provide adequate confidence the program is operating as expected
           */
          [
            2, 0, 0, 7,
            99, 23, 0, 0,
            0, 0, 0, 0,
            0, 0, 0, 0,
            0, 0, 0, 0,
            29, 0, 0, 0
          ],
          667,
          7,
          0,
          30
        ],
        expected: {
          noun: 5,
          verb: 20
        }
      }
    ];

    tableTest(conditions, bruteForceInputs, 'toStrictEqual');
  })
});

