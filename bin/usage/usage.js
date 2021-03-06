const search = require('./commands/search');
const server = require('./commands/server');

const usage = require('yargs')
  .locale('en')
  .strict()
  .recommendCommands()
  .usage('Usage: $0 [options] <command> [<args>]')
  .command(search)
  .command(server)
  .alias('help', 'h')
  .help();

module.exports = usage;
