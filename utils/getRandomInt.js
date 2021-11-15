'use strict';

const chalk = require('chalk');
const log = require('./log');

// Returns random integer 
function getRandomInt(max) {
	// Type checking
	if (typeof max === 'number') {
		return Math.floor(Math.random() * max);
	}
	else {
        const error = 'Error at function getRandomInt, parameter "max" should be of type "number".';
        log(error)
		.finally(() => {
            throw Error(chalk.red(error));
        });
	}
}

module.exports = getRandomInt;