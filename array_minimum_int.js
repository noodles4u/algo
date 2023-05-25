// PRINT NUMBERS
// Write an algorithm which receives an array of integers and prints its minimum.

// 1.
let arrayPos;
const getMin = (tab) => {
  let lowestNr = tab[0];

  for (let i = 0; i < tab.length; i++) {
    if (tab[i] < lowestNr) {
      lowestNr = tab[i];
      arrayPos = i;
    }
  }
  return lowestNr && console.log(`This is the current minimum ${lowestNr}`);
};

// 3.appeler la fonction getMin(numbers)
let numbers = [18, 3, 4, 5, 2]; // tab to test function getMax

console.log(getMin(numbers));
console.log(`This is the position in the array ${arrayPos}`);
