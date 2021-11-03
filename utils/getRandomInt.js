'use strict';

const chalk = require('chalk');

// Returns random integer 
function getRandomInt(max) {
	// Type checking
	if (typeof max === 'number') {
		return Math.floor(Math.random() * max);
	}
	else {
		throw Error(chalk.red('Error at function getRandomInt, parameter "max" should be of type "number".'));
	}
}

module.exports = getRandomInt;