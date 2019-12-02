const { loadFile } = require('../utils');

const operations = {
  1: (a, b) => a + b,
  2: (a, b) => a * b,
};

const offsetA = 1;
const offsetB = 2;
const offsetStore = 3;

const getAddresses = (input) => ({
  a: input[offsetA],
  b: input[offsetB],
  store: input[offsetStore]
});

const evaluateIntCode = (input) => {
  const memory = [...input];

  let cursor = 0;
  let currentCode = 0;
  do {
    currentCode = memory[cursor];
    const addresses = getAddresses(memory.slice(cursor, cursor + 4));
    const operation = operations[currentCode];

    if (operation) {
      const paramA = memory[addresses.a];
      const paramB = memory[addresses.b];

      memory[addresses.store] = operation(paramA, paramB);
    }

    cursor += 4;
  } while (currentCode < 99);

  return memory;
};

const execute = () => {
  const input = loadFile(_dirname + './input.txt').map((s) => Number.parseInt(s, 10));

  evaluateIntCode(input);
};

module.exports = {
  execute,
  evaluateIntCode
};