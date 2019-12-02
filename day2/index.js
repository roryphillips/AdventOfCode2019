const { loadFile } = require('../utils');

const operations = {
  1: (a, b) => a + b,
  2: (a, b) => a * b,
};

const offsetA = 1;
const offsetB = 2;
const offsetStore = 3;
const instructionSize = 4;

const getAddresses = (input) => ({
  a: input[offsetA],
  b: input[offsetB],
  store: input[offsetStore]
});

const evaluateIntCode = (input) => {
  const memory = [...input];

  let instructionPointer = 0;
  let currentCode = 0;

  do {
    currentCode = memory[instructionPointer];
    const instruction = memory.slice(instructionPointer, instructionPointer + instructionSize);
    const addresses = getAddresses(instruction);
    const operation = operations[currentCode];

    if (operation) {
      const paramA = memory[addresses.a];
      const paramB = memory[addresses.b];

      memory[addresses.store] = operation(paramA, paramB);
    }

    instructionPointer += instructionSize;
  } while (currentCode < 99);

  return memory;
};

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
  execute,
  evaluateIntCode
};