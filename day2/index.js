const { loadFile, evaluateIntCode } = require('../utils');

const execute = () => {
  const program = loadFile(__dirname + '/input.txt', ',')
    .map((s) => Number.parseInt(s, 10));

  const memory = evaluateIntCode(program);
  console.log(`First calculation: ${memory[0]}`);

  const target = 19690720;
  for (let noun = 0; noun < Math.min(program.length, 99); noun++) {
    for (let verb = 0; verb < Math.min(program.length, 99); verb++) {
      program[1] = noun;
      program[2] = verb;
      const result = evaluateIntCode(program)[0];
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
