const files = require('./files');
const fuelCost = require('./fuel-cost');
const intcode = require('./intcode');
const test = require('./test');

module.exports = {
  ...files,
  ...fuelCost,
  ...intcode,
  ...test
};
