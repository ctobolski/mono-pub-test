#!/usr/bin/env node
const program = require('commander')

program
  .option('--first')
  .option('-s, --separator <char>');

program.parse();

const options = program.opts();
const limit = options.first ? 1 : undefined;
console.log('Echo', program.args[0])
