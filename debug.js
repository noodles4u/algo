const name = 'John Waters';
function condi() {
  if (name === 'John Waters') {
    console.log("Yes, I'm name!");
  } else {
    console.log("No, I'm not name!");
  }
}

condi('John');

// const name = 'John Waters';
const condi = (name) => {
  if (name === 'John Waters') {
    console.log("Yes, I'm name!");
  } else {
    console.log("No, I'm not name!");
  }
};

condi('John');
condi('John Waters');
///

let age = 18;

if (age < 18) {
  console.log('You can have a reduction, the price is 8€!');
} else age >= 18;
{
  console.log('The full tarrif is 10€!');
}
