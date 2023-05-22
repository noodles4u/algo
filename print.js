let ten = 0.12;
let twenty = 0.11;
let rest = 0.1;
let amount = 20;
const printshop = (amount) => {
  if (amount > 30) {
    return (amount - 30) * rest + 10 * ten + 20 * twenty;
  } else if (amount <= 30 && amount > 10) {
    return (amount - 10) * twenty + 10 * ten;
  } else {
    return amount * ten;
  }
};

console.log(printshop(amount));
