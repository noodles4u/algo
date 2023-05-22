// VAT calculator

// Required line for prompt-sync, enables prompts in terminal with node
const prompt = require('prompt-sync')({ sigint: true });
//
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
