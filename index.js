function init() {
  const args = process.argv.slice(2);
  if (args.length > 1) {
    console.log('Only one argument is supported <day>');
    return;
  } else if (args.length === 0) {
    console.log('You must supply a <day> argument');
    return;
  }

  const day = parseInt(args[0]);
  if (Number.isNaN(day)) {
    console.log('You must supply an integer for the <day> argument');
    return;
  } else if (day > 25 || day < 1) {
    console.log('You must supply an integer between 1 and 25 for the <day> argument');
    return;
  }

  require(`./day${day}`).execute();
}

init();
