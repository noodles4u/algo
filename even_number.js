// PRINT NUMBERS
// Write an algorithm which prints all the even numbers from 0 to a given number.

// Required line for prompt-sync, enables prompts in terminal with node
const prompt = require('prompt-sync')({ sigint: true });
//
let userNumber = parseFloat(prompt("What's your chosen number?"));
let numberArr = [];

/// increase
const printEvenNumbers = (number) => {
  for (i = 0; i <= number; i++) {
    numberArr.push(i++);
  }
  return numberArr;
};

console.log(printEvenNumbers(userNumber));
