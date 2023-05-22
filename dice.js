const dice = [1, 2, 3, 4, 5, 6];
let result = [];

for (let i = 0; i < 3; i++) {
  // console.log('test');
  result.push(Math.floor(Math.random() * dice.length) + 1);
}

console.log(result);

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
