// test
console.log(
  'Hello dear Johnson Junior, Welcome into the backend development wizarding world! ',
);

// sum
var ara = 2;
var ba = 3;
console.log(ara + ba);

// division
var aba = 8;
var lala = 3;
console.log(aba / lala);

// modulo
console.log(aba % lala);

// concatenation
var oops = 'samba';
var poo = 'blabla';
console.log(oops + poo);

// VAT calculator
let amount;
amount = parseFloat(prompt("What's price without the VAT?"));
let tva;
tva = amount * 0.21;
function vat() {
  console.log(
    'This is the amount with VAT included:' +
      ' ' +
      (amount + tva) +
      '. ' +
      'Your VAT was' +
      ' ' +
      tva +
      '.',
  );
}

vat();

// Circle surface area calculator
let radius;
radius = parseFloat(prompt("What's the radius of the circle?"));

console.log(radius * radius * Math.PI);

// Time of day:
// Reminder use arrays and not several variables
let time = [];
for (let i = 0; i < 3; i++) {
  let value = parseFloat(
    prompt(
      `Enter the time (24h) in folllowing order: Hour, Minutes, Seconds ${
        i + 1
      }:`,
    ),
  );
  time.push(value);
}

console.log(time[0] * 3600 + time[1] * 60 + time[2]);

// rando number from 0 to 100
let rando = Math.floor(Math.random() * 101);
console.log(rando);

// simple condition

const name = 'John Waters';
function condi() {
  if (name === 'John Waters') {
    console.log("Yes, I'm name!");
  } else {
    console.log("No, I'm not name!");
  }
}

condi('John');

//
