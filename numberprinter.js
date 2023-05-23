// PRINT NUMBERS

// Required line for prompt-sync, enables prompts in terminal with node
const prompt = require('prompt-sync')({ sigint: true });
//
let userNumber = parseFloat(prompt("What's your chosen number?"));
let numberArr = [];
let numberArrReverse = [];
let numberArrOdd = [];
let numberArrAll = [];

/// increase
const printNumbers = (number) => {
  for (i = 1; i <= number; i++) {
    numberArr.push(i);
  }
  return numberArr;
};

console.log(printNumbers(userNumber));

// // decrease/reverse
const printReverseNumbers = (number) => {
  for (i = number; i > 0; i--) {
    numberArrReverse.push(i);
  }
  return numberArrReverse;
};
console.log(printReverseNumbers(userNumber));

// all numbers, minus included
/// increase
const printAllNumbers = (number) => {
  for (i = -number; i <= number; i++) {
    numberArrAll.push(i);
  }
  return numberArrAll;
};

console.log(printAllNumbers(userNumber));

/// Not working, to be checked later
// const printCallFunctionNumbers = (number) => {
//     let negNbr = printNumbers(userNumber);

//     for (i = 0; i > number; i++) {
//       push.negNbr([i] * -1);
//     }
//     return negNbr;
//   };
//   console.log(printCallFunctionNumbers(printNumbers(userNumber)));

// odd numbers
const printOddNumbers = (number) => {
  for (i = 1; i <= number; i++) {
    numberArrOdd.push(i++);
  }
  return numberArrOdd;
};

console.log(printOddNumbers(userNumber));
