'use strict';

const chalk = require('chalk');
const codeBusking = require('./codebusking');

module.exports = {
	firstName: codeBusking.firstName,
	lastName: codeBusking.lastName,
	email: codeBusking.email,
	homepage: codeBusking.homepage,
	name: function() {
		return `${chalk.blue(this.firstName)} ${chalk.red(this.lastName)}`;
	}
}
