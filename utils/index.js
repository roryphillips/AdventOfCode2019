const files = require('./files');
const fuelCost = require('./fuel-cost');
const intcode = require('./intcode');
const unitTest = require('./unit-test');

module.exports = {
  ...files,
  ...fuelCost,
  ...intcode,
  ...unitTest
};
