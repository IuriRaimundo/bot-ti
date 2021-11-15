'use strict'

const { rejects } = require('assert');
const chalk = require('chalk');
const fs = require('fs');

function log(message) {
    return new Promise((resolve, reject) => {
        const path = './debug/debug.log';
        const errorMessage = `\n'${new Date}\n${message}\n\n`;
        // Create debug folder if it doesn't exist
        if (!fs.existsSync('./debug')){
            fs.mkdirSync('./debug');
        }
        // Write the date and the error message on the log
        fs.appendFile(path, errorMessage, 'utf8', (err) => {
            if (err)
            {
                console.log(chalk.red('Error in function log: ' + err.message));
                reject();
            }
            else
            {
                console.log(chalk.blue('\nRead the error messages at debug/debug.log\n'));
                resolve();
            }
        })
    });
}

module.exports = log;
