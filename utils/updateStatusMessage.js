// Updates the bot status with a dynamic message

const chalk = require('chalk');
const selectRandomArrayElement = require('./selectRandomArrayElement');
const { statusMessages } = require('../messages');

function updateStatusMessage() {
    const message = selectRandomArrayElement(statusMessages);
    console.log(chalk.blue('New Status Message: ') + message);
    return message;
};

module.exports = {
  updateStatusMessage,
};
