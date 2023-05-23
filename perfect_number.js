// PRINT NUMBERS
// Write an algorithm which verify if a given positive integer is a perfect number, meaning equal to the sum of his divisors (except himself).

// Required line for prompt-sync, enables prompts in terminal with node
const prompt = require('prompt-sync')({ sigint: true });
//
let userNumber = parseFloat(prompt("What's your chosen number?"));

let arraySumup;
let divisionNumber = [];
const sumup = (a, b) => a + b;

const printPerfectNumber = (number) => {
  for (i = number - 1; i > 0; i--) {
    if (userNumber % i === 0) {
      divisionNumber.push(i);
    }
  }
  arraySumup = divisionNumber.reduce(sumup);

  if (arraySumup === userNumber) {
    console.log(
      `${userNumber} is a perfect number. The division numbers are ${divisionNumber}.`,
    );
  } else {
    console.log('No perfect number here, try again.');
  }
};

console.log(printPerfectNumber(userNumber));
