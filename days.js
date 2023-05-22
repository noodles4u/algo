// Required line for prompt-sync, enables prompts in terminal with node
const prompt = require('prompt-sync')({ sigint: true });
// days of the week

let days = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];
number = parseFloat(prompt('Which day of the week are we?'));
console.log(days[number - 1]);

const weekday = (number) => console.log(days[number - 1]);
