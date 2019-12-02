const { loadFile, evaluateIntCode } = require('../utils');

const execute = () => {
  const input = loadFile(__dirname + '/input.txt', ',')
    .map((s) => Number.parseInt(s, 10));

  const memory = evaluateIntCode(input);
  console.log(`First calculation: ${memory[0]}`);

  const target = 19690720;
  for (let noun = 0; noun < Math.min(input.length, 99); noun++) {
    for (let verb = 0; verb < Math.min(input.length, 99); verb++) {
      const tempMemory = [...input];

      tempMemory[1] = noun;
      tempMemory[2] = verb;

      const result = evaluateIntCode(tempMemory)[0];
      if (result === target) {
        console.log(`Second calculation: ${100 * noun + verb}`);
        return;
      }
    }
  }
};

module.exports = {
  execute
};
