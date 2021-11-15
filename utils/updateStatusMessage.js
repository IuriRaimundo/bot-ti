// Updates the bot status with a dynamic message

const selectRandomArrayElement = require('./selectRandomArrayElement');
const { statusMessages } = require('../messages');

function updateStatusMessage() {
	const message = selectRandomArrayElement(statusMessages);
	return message;
}

module.exports = {
	updateStatusMessage,
};
