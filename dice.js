//  Write an algorithm which throws a dice a given number of time and count the number of time a certain number is received.

const dice = [1, 2, 3, 4, 5, 6];
let result = [];
let nbrThrows;

const throwing = (nbrThrows) => {
  for (let i = 0; i < nbrThrows; i++) {
    // console.log('test');
    result.push(Math.floor(Math.random() * dice.length) + 1);
  }
  console.log(result);
};
throwing(2);
// for (let i = 0; i < 3; i++) {
//   // console.log('test');
//   result.push(Math.floor(Math.random() * dice.length) + 1);
// }

// check if equal
let checker = [0, 0, 0, 0, 0, 0];
for (let i = 0; i < result.length; i++) {
  checker[result[i] - 1]++;
}
console.log(checker);

let max = checker[0];
for (let i = 0; i < checker.length; i++) {
  if (checker[i] > max) {
    max = checker[i];
  }
}

if (max < 2) {
  console.log('None are identical');
} else {
  console.log(`There are ${max} identical values`);
}
