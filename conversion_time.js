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
