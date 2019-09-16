#!/usr/bin/env node
'use strict';

// Force set timezone
const fs = require('fs');
process.env.TZ = fs.readFileSync('/etc/timezone').toString().trim();

// Handle command line options
const argv = require('yargs').argv;
if (argv.manager) {
  const Manager = require('../lib/manager/manager');
  const manager = new Manager({ options: argv });
  manager.start();
} else if (argv.emailer) {
  const Emailer = require('../lib/emailer/emailer');
  const emailer = new Emailer({ options: argv });
  emailer.start();
} else if (argv.container) {
  const Container = require('../lib/container/container');
  const container = new Container({ options: argv });
  container.start();
}
