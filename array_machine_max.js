// PRINT NUMBERS
// Write an algorithm which receives an array of integers and prints its maximum.

// Required line for prompt-sync, enables prompts in terminal with node
const prompt = require('prompt-sync')({ sigint: true });

// 1.ici faire une boucle pour demander les valeurs et les enregistrer dans le tableau numbers

let userInput = parseFloat(prompt('What are your numbers?'));
let numbers = [];
const userPrompt = () => {
  // !userInput.length === 0;

  while (userInput !== undefined && !isNaN(userInput)) {
    numbers.push(userInput);
    userInput = parseFloat(prompt('What are your numbers?'));
    console.log(numbers);
  }
  {
    console.log('You done fucked up, you can only insert numbers. Try again!');
  }
};

// 2.definition de la fonction getMaximum qui prend en parametre un tableau d'entiers

const getMaximum = (tab) => {
  let highNumber = tab[0];
  for (let i = 0; i < tab.length; i++) {
    if (tab[i] > highNumber) {
      highNumber = tab[i];
    }
  }
  return highNumber && console.log(`This is the current max ${highNumber}`);
};

// 3.appeler la fonction getMaximum(numbers)
// let numbers = [8, 3, 4, 5, 2]; // tab to test function getMax
userPrompt();
console.log(getMaximum(numbers));
// console.log(userPrompt());
