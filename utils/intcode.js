// Constant Values
const InstructionSize = 4;
const OperationCode = {
  Add: 1,
  Multiply: 2,
  Halt: 99
};
const Offsets = {
  A: 1,
  B: 2,
  Store: 3
};

// Utils
const operations = {
  [OperationCode.Add]: (a, b) => a + b,
  [OperationCode.Multiply]: (a, b) => a * b,
};

const getAddresses = (input) => ({
  a: input[Offsets.A],
  b: input[Offsets.B],
  store: input[Offsets.Store]
});

// Main intcode program runner
const evaluateIntCode = (input) => {
  const memory = [...input];

  let instructionPointer = 0;
  let currentCode = 0;

  do {
    currentCode = memory[instructionPointer];
    const instruction = memory.slice(instructionPointer, instructionPointer + InstructionSize);
    const addresses = getAddresses(instruction);
    const operation = operations[currentCode];

    if (operation) {
      const paramA = memory[addresses.a];
      const paramB = memory[addresses.b];

      memory[addresses.store] = operation(paramA, paramB);
    } else if (currentCode !== OperationCode.Halt) {
      throw new Error(`Unknown operation code reached: ${currentCode}`)
    }

    instructionPointer += InstructionSize;
  } while (currentCode !== OperationCode.Halt);

  return memory;
};

const bruteForceInputs = (program, target, resultIdx = 0, min = 0, max = 99) => {
  const minInput = Math.min(min, program.length);
  const maxInput = Math.max(program.length, max, minInput);

  for (let noun = minInput; noun < maxInput; noun++) {
    for (let verb = minInput; verb < maxInput; verb++) {
      const programAttempt = [...program];
      programAttempt[1] = noun;
      programAttempt[2] = verb;
      const result = evaluateIntCode(programAttempt)[resultIdx];
      if (result === target) {
        return {
          noun,
          verb
        };
      }
    }
  }

  throw new Error('No bruteforce solution was found within the parameters specified');
};

module.exports = {
  evaluateIntCode,
  bruteForceInputs,
};
