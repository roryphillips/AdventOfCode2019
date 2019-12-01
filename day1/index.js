const { loadFile } = require('../utils');

const calculateFuelCost = (mass) => Math.max(Math.floor(mass / 3) - 2, 0);
const calculateFuelCostIncludingFuel = (mass) => {
  const fuelRequired = calculateFuelCost(mass);
  return fuelRequired + (
    fuelRequired > 0
      ? calculateFuelCostIncludingFuel(fuelRequired)
      : 0
  );
};

const execute = () => {
  const input = loadFile( __dirname + '/input.txt').map(str => parseInt(str, 10));

  const totalCost = input.reduce((cost, mass) =>
    cost + calculateFuelCost(mass), 0);

  const totalCostIncludingFuel = input.reduce((cost, mass) =>
    cost + calculateFuelCostIncludingFuel(mass), 0);

  console.log(`Total fuel cost ${totalCost}`);
  console.log(`Total fuel cost including cost of fuel ${totalCostIncludingFuel}`);
};

module.exports = {
  execute,
  calculateFuelCost,
  calculateFuelCostIncludingFuel,
};