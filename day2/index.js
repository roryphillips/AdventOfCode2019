const { loadFile, evaluateIntCode, bruteForceInputs } = require('../utils');

const execute = () => {
  const program = loadFile(__dirname + '/input.txt', ',')
    .map((s) => Number.parseInt(s, 10));

  const memory = evaluateIntCode(program);
  console.log(`First calculation: ${memory[0]}`);

  const target = 19690720;
  const { noun, verb } = bruteForceInputs(program, target);
  const inputPhrase = 100 * noun + verb;
  console.log(`Second calculation: ${inputPhrase}`);
};

module.exports = {
  execute
};
