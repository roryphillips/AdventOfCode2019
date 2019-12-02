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

module.exports = {
  evaluateIntCode,
};