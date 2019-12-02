const calculateFuelCost = (mass) => Math.max(Math.floor(mass / 3) - 2, 0);

const calculateFuelCostIncludingFuel = (mass) => {
  const fuelRequired = calculateFuelCost(mass);
  return fuelRequired + (
    fuelRequired > 0
      ? calculateFuelCostIncludingFuel(fuelRequired)
      : 0
  );
};

module.exports = {
  calculateFuelCost,
  calculateFuelCostIncludingFuel
};
