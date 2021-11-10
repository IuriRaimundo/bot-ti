'use strict'

const { ralharMessages } = require("../messages")
const selectRandomArrayElement = require("../utils/selectRandomArrayElement")

function ralhar(message)
{
    const messageContent = selectRandomArrayElement(ralharMessages);
    message.channel.send(messageContent);
}

module.exports = ralhar;