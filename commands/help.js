const Discord = require('discord.js');

const embeddedMessage = new Discord.MessageEmbed()
  .setColor('#77185e')
  .setTitle('Lista de Comandos')
  .setAuthor('Mr. Time', 'https://github.com/afonsosantos')
  .setDescription('Lista de comandos disponíveis')
  .setThumbnail('https://i.imgur.com/2r3EbTF.png')
  .addField(`**hora**`, 'Mostra a hora atual')
  .addField(`**temp**`, 'Mostra a temperatura atual')
  .addField(`**meteo**`, 'Mostra a meteorologia atual')
  .addField(`**defmeteo**`, 'Define uma temperatura e meteorologia (args: <temp> <meteorologia>)')
  .addField(`**auto**`, 'Mostra uma mensagem com a hora, meteorologia e temperatura')
  .addField(`**ajuda**`, 'Mostra esta mensagem')
  .setTimestamp()
  .setFooter('Bot por Afonso Santos', 'https://i.imgur.com/1LHooWF.png');

function help(message) {
    message.channel.send(embeddedMessage);
}
  module.exports = help;