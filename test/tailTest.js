const tail = require('../tail');
const assertEqual = require('../assertEqual')

const words = ["Yo Yo", "Lighthouse", "Labs"];

tail(words); // "These are the words after it's ran through tail"
assertEqual(words.length, 3); //does not affect the original array