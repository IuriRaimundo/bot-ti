'use strict';

const chalk = require('chalk');
const getRandomInt = require('./getRandomInt');

function selectRandomArrayElement(array) {
	let length, index;

	// Type checking
	if (!Array.isArray(array)) {
		throw Error(chalk.red('Error at function selectRandomArrayElement, the "array" parameter should be of type: Array.'));
	}

	// Get array length
	length = array.length;

	// Get a random integer between 0 and the length
	index = getRandomInt(length);

	// Return a message from the messages array using that random integer
	return array[index];
}

module.exports = selectRandomArrayElement;