let tab = [0, 200, 35, 345, 33333, 1000, 2000, 456, 1];
let max = tab[0];
for (let i = 0; i < tab.length; i++) {
  // console.log('elt: ', tab[i]);
  // console.log('elt + 1: ', tab[i + 1]);
  if (tab[i] > max) {
    console.log('superior');
    max = tab[i];
    console.log(`This is the current max ${max}`);
  } else {
    console.log(`I'm ${tab[i]}, I'm too small`);
  }
}
console.log(max);
