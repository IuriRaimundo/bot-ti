const { respostaDuvidas } = require('../messages')
const selectRandomArrayElement = require('../utils/selectRandomArrayElement')

function duvida(message) {
	// Get and return random message of type 'duvidas'
	const replyContent = selectRandomArrayElement(respostaDuvidas)
	message.reply(replyContent)
}

module.exports = duvida