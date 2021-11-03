const Discord = require('discord.js');

const respostaDuvidas = [
    "Não perguntem detalhes, perguntem sobre o que eu disse!",
    "Não me digas nada  que eu sei o que é que vais dizer.",
    "Não o fazes, encontras outra forma.",
]

const textoMateria = {
    tiposDeDados: new Discord.MessageEmbed()
        .setColor('#03c2fc')
        .setTitle('Tipos de dados em C')
        .setThumbnail('https://i.imgur.com/2r3EbTF.png')
        .setDescription('Na linguagem C existem os seguintes tipos de dados')
        .addField('Tipos de dados básicos', 'int, char, float, double')
        .addField('int', 'Número inteiro (4 bytes)')
        .addField('char', 'Caracter (1 byte)')
        .addField('float', 'Número real (4 bytes)')
        .addField('double', 'Número real com dobro do tamanho (8 bytes)')
        .addField('Tipos de dados derivados', 'vetores, ponteiros, estruturas, uniões')
        .addField('Vetores', 'Armazena vários n valores do mesmo tipo, ex: int vetor[n]')
        .addField('Ponteiros', 'Endereço de memória, ex: int *a, guarda o endereço de uma variável de tipo int')
        .addField('Estruturas', 'Permitem armazenar numa única variável dados de tipos diferentes.')
        .addField('Uniões', 'Tipo de dado derivado com membros que compartilham o mesmo espaço de armazenamento.')
        .addField('Void', 'Void é o tipo de dado que representa o vazio, usado para determinar ausência de retorno e argumentos numa função.')
        .setFooter('Bot por Engenheiros da Deloitte', 'https://i.imgur.com/1LHooWF.png'),
    
    estruturasDeDecisao: new Discord.MessageEmbed()
        .setColor('#77185e')
        .setTitle('Estruturas de decisão')
        .setAuthor('Távora Bot', 'https://github.com/afonsosantos')
        .setDescription('Lista de comandos disponíveis')
        .setThumbnail('https://i.imgur.com/2r3EbTF.png')
        .addField(`**duvida + mensagem**`, 'Responder a dúvidas')
        .setTimestamp()
        .setFooter('Bot por Engenheiros da Deloitte', 'https://i.imgur.com/1LHooWF.png'),
    estruturasDeRepeticao: new Discord.MessageEmbed()
        .setColor('#77185e')
        .setTitle('Estruturas de repetição')
        .setAuthor('Távora Bot', 'https://github.com/afonsosantos')
        .setDescription('Lista de comandos disponíveis')
        .setThumbnail('https://i.imgur.com/2r3EbTF.png')
        .addField(`**duvida + mensagem**`, 'Responder a dúvidas')
        .setTimestamp()
        .setFooter('Bot por Engenheiros da Deloitte', 'https://i.imgur.com/1LHooWF.png'),
    
    estruturasDeControlo: new Discord.MessageEmbed()
        .setColor('#77185e')
        .setTitle('Estruturas de controlo')
        .setAuthor('Távora Bot', 'https://github.com/afonsosantos')
        .setDescription('Lista de comandos disponíveis')
        .setThumbnail('https://i.imgur.com/2r3EbTF.png')
        .addField(`**duvida + mensagem**`, 'Responder a dúvidas')
        .setTimestamp()
        .setFooter('Bot por Engenheiros da Deloitte', 'https://i.imgur.com/1LHooWF.png'),
}

const statusMessages = ["Já sei o que vais dizer!", "Feito pelos melhores alunos!", "Ajuda: /help"];

const helpEmbed = new Discord.MessageEmbed()
  .setColor('#77185e')
  .setTitle('Lista de Comandos')
  .setAuthor('Távora Bot', 'https://github.com/afonsosantos')
  .setDescription('Lista de comandos disponíveis')
  .setThumbnail('https://i.imgur.com/2r3EbTF.png')
  .addField(`**duvida + mensagem**`, 'Responder a dúvidas')
  .addField(`**ajuda / help**`, 'Mostra esta mensagem')
  .setTimestamp()
  .setFooter('Bot por Engenheiros da Deloitte', 'https://i.imgur.com/1LHooWF.png');

module.exports = {
    respostaDuvidas,
    textoMateria,
    statusMessages,
    helpEmbed
}
