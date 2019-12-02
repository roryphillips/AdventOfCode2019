const fs = require('fs');

// Loads a file and turns it into an array of strings
const loadFile = (path) => fs.readFileSync(path).toString().split("\n").map(str => str.trim());

// Takes a table of conditions and tests each of the expectations
const tableTest = (conditions, func, expectationFunc = 'toBe') => {
  conditions.forEach((condition) => {
    it(`should have an output of ${condition.expected} with an input of ${condition.input}`, () => {
      const input = func(condition.input);
      expect(input)[expectationFunc](condition.expected);
    })
  })
};

module.exports = {
  loadFile,
  tableTest
};
