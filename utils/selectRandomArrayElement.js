'use-strict'

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function selectRandomArrayElement(array) {
    let length, index;
    // Type checking
    if (!Array.isArray(array))
    {
        console.log('Error at function selectRandomArrayElement, the "array" parameter should be of type: Array.');
        return;
    }
    // Get array length
    length = array.length;
    // Get a random integer between 0 and the length
    index = getRandomInt(length);
    // Return a message from the messages array using that random integer
    return array[index];
}

module.exports = selectRandomArrayElement;