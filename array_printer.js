// PRINT NUMBERS
// Write an algorithm which verify if a given positive integer is a perfect number, meaning equal to the sum of his divisors (except himself).

// Required line for prompt-sync, enables prompts in terminal with node
const prompt = require('prompt-sync')({ sigint: true });
//
// let userInput = parseFloat(prompt("What's your chosen number?"));
let userInput = prompt("What's your input?");
let blob = 'I like to samba samba';
let arrayLibrary = ['test', 'sampling', blob];
const arrayInput = () => {
  arrayLibrary.push(userInput);
  console.log(arrayLibrary);
};
arrayInput();
