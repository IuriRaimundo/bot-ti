'use strict';

const { helpEmbed } = require('../messages');

function help(message) {
	message.channel.send({ embeds: [helpEmbed] });
}

module.exports = help;