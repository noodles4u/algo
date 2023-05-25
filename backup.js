// PRINT NUMBERS
// Write an algorithm which receives an array of integers and prints its maximum.

// Required line for prompt-sync, enables prompts in terminal with node
const prompt = require('prompt-sync')({ sigint: true });
//

// const highChecker = () => {
//   for (let i = 0; i < arrayLibrary.length; i++) {
//     if (arrayLibrary[i] > highNumber) {
//       highNumber = arrayLibrary[i];
//     }
//   }
//   console.log(highNumber);
// };
////
////

let arrayLibrary = [];
let userInput;

const askMachine = () => {
  let userInput = parseFloat(prompt('What are your numbers?'));

  // if (isNaN(userInput) === false) {
  // if (!userInput || !userInput.length === 0) {
  //   console.log(arrayLibrary);
  //   console.log('anything?');

  // } else {
  arrayLibrary.push(userInput);
  let i;
  let highNumber = arrayLibrary[0];
  for (
    highNumber = i;
    i < arrayLibrary.length &&
    !userInput.length === 0 &&
    isNaN(userInput) === false;
    i++
  )
    if (arrayLibrary[i] > highNumber) {
      highNumber = arrayLibrary[i];
    } else {
      console.log(`This is the current max ${highNumber}`);
    }

  askMachine();

  // } else {
  //   console.log('You done fucked up, you can only insert numbers. Try again!');

  //   // console.log(arrayLibrary);
  //   // console.log(highNumber);
  //   // console.log(`This is the current max ${highNumber}`);
  // }
};
askMachine();
