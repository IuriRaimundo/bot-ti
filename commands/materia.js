'use-strict'

const {textoMateria} = require('../messages');
const selectRandomArrayElement = require('../utils/selectRandomArrayElement');

// Content keys and it's content
const keys = ['tipos de dados', 'estruturas de decisão', 'estruturas de repeticão', 'estruturas de controlo'];
const keyMappings = {
    'tipos de dados': textoMateria.tiposDeDados,
    'estruturas de decisão': textoMateria.estruturasDeDecisao,
    'estruturas de repeticão': textoMateria.estruturasDeRepeticao,
    'estruturas de controlo': textoMateria.estruturasDeControlo,
}

function materia(message)
{
    // Send random content if the command is simply 'materia'
    if (message.content === 'materia')
    {
        let key = selectRandomArrayElement(keys)
        message.reply(keyMappings[key]);
        return;
    }

    // Check if the keys are included in the message and send it's corresponding content if they are.
    for (let i = 0, len = keys.length; i < len; i++)
    {
        if (message.content.includes(keys[i]))
        {
            message.reply(keyMappings[keys[i]]);
            return;
        }
    }

    // If the message didn't match a key, send this message
    message.reply('Procura alguma coisa que eu te ensinei.');
}

module.exports = materia;