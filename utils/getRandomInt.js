'use-strict'

const chalk = require("chalk");

// Returns random integer 
function getRandomInt(max)
{
    // Type checking
    if (typeof max === 'number')
    {
        return Math.floor(Math.random() * max);
    }
    else
    {
        console.log(chalk.red('Error at function getRandomInt, parameter "max" should be of type "number".'));
        return 0;
    }
}

module.exports = getRandomInt;