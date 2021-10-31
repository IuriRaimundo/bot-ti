// Updates the bot status with a dynamic message

const selectRandomArrayElement = require("./selectRandomArrayElement");
const { statusMessages } = require("../messages");

const updateStatusMessage = () => {
    const message = selectRandomArrayElement(statusMessages);
    console.log(`Nova Mensagem de Status: ${message}`)
    return message;
}

module.exports = {
    updateStatusMessage
}