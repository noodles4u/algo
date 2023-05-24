// PRINT content
// Write an algorithm which prints everything in an array.

// Required line for prompt-sync, enables prompts in terminal with node
const prompt = require('prompt-sync')({ sigint: true });
//

let blob = 'I like to samba samba';
let arrayLibrary = ['test', 'sampling', blob];
let userInput;

const askMachine = () => {
  let userInput = prompt("What's your information?");
  if (!userInput || !userInput.length === 0) {
    console.log(arrayLibrary);
  } else {
    // return; //break out of the function early

    arrayLibrary.push(userInput);
    askMachine();
  }
};
askMachine();
