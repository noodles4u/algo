// PRINT NUMBERS
// Write an algorithm which verify if a given positive integer is a perfect number, meaning equal to the sum of his divisors (except himself).

// Required line for prompt-sync, enables prompts in terminal with node
const prompt = require('prompt-sync')({ sigint: true });
//

let blob = 'I like to samba samba';
let arrayLibrary = ['test', 'sampling', blob];
let userInput;
// const askMachine = () => {
//   do {
//     let userInput = prompt("What's your information?");
//     arrayLibrary.push(userInput);
//   } while (userInput !== null);
//   {
//     // return; //break out of the function early
//     console.log(arrayLibrary);
//     return;
//   }
// };
// let end = 'Done';
// const askMachine = () => {
//   for (i = userInput; i === end; i++) {
//     let userInput = prompt("What's your information?");
//     arrayLibrary.push(userInput);
//   }

//   // return; //break out of the function early
//   console.log(arrayLibrary);
//   return;
// };
// askMachine();

const askMachine = () => {
  let userInput = prompt("What's your information?");
  if (prompt('')) {
    arrayLibrary.push(userInput);
    askMachine();
  } else {
    // return; //break out of the function early
    console.log(arrayLibrary);
  }
};
askMachine();
