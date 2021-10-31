/* Main file */
const dotenv = require("dotenv");
const { Client, Intents } = require('discord.js');
const commands = require('./commands/commands');
const { updateStatusMessage } = require("./utils/updateStatusMessage");

const messages = require('./messages.js');

dotenv.config();

// Create a new client instance
const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.DIRECT_MESSAGES],
});

// When the client is ready, run this code (only once)
client.once('ready', () => {
    console.log('Ready!');

    // Set a status like "Playing"
    setInterval(() => client.user.setActivity(updateStatusMessage()), 10000);
});

client.on("messageCreate", message => {
    const lowerCaseMessage = message.content.toLowerCase();

    if (lowerCaseMessage.includes('duvida') || lowerCaseMessage.includes('dúvida')) {
        commands.duvida(message);
        return;
    }
});

client.login(process.env.TOKEN);