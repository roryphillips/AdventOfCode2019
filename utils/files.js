const fs = require('fs');

// Loads a file and turns it into an array of strings
const loadFile = (path, separator = "\n") => fs.readFileSync(path).toString().split(separator).map(str => str.trim());

module.exports = {
  loadFile,
};
