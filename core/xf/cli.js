#!/usr/bin/env node
const program = require('commander')
const { print } = require('@christopher.tobolski/printer')

program
  .option('--first')
  .option('-s, --separator <char>');

program.parse();

const options = program.opts();
print(program.args[0])
