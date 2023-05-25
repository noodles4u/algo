// PRINT NUMBERS
// Write a algorithm which receives an array of integers and check if its ordered ascendantly. Print true if the array is ordered, false if it’s not.

// 1.
const getAscendant = (tab) => {
  let previousNr = tab[0];

  // for (let i = 0; i < tab + 1; i++) {
  for (let i = 1; i < tab.length; i++) {
    // previousNr = tab[i];
    console.log(`check ${tab[i]}`);
    if (previousNr < tab[i]) {
      previousNr = tab[i];
    } else {
      return false;
      break;
    }
  }
  return true;
};

let numbers = [1, 30, 4000, 100, 505]; // tab to test function getAscendant

console.log(getAscendant(numbers));
