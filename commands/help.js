const Discord = require('discord.js');

const embed = new Discord.MessageEmbed()
  .setColor('#77185e')
  .setTitle('Lista de Comandos')
  .setAuthor('Távora Bot', 'https://github.com/afonsosantos')
  .setDescription('Lista de comandos disponíveis')
  .setThumbnail('https://i.imgur.com/2r3EbTF.png')
  .addField(`**duvida + mensagem**`, 'Responder a dúvidas')
  .addField(`**ajuda / help**`, 'Mostra esta mensagem')
  .setTimestamp()
  .setFooter('Bot por Engenheiros da Deloitte', 'https://i.imgur.com/1LHooWF.png');

function help(message) {
  message.channel.send({ embeds: [embed] });
}
module.exports = help;