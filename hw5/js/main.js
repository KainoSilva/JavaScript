let a = +prompt('Enter num a');
let b = +prompt('Enter num b');
let h = +prompt('Enter step h');
let sumOfFact = 0;

document.write(`a = ${a}, b = ${b}, h = ${h} <br>`);

if (a <= b) {
  if (h > 0) {
    for (a; a <= b; a += h) {
     for (j = 1, factorial = 1; j <= a; j++) {
      factorial = factorial * j;
     }
     sumOfFact += factorial
    }
    document.write('Sum of factorials is ', sumOfFact);
  }
  else {
    document.write('Wrong condition'); 
  }
}
else {
  document.write('Wrong condition'); 
}


// let a, b, h;

// do {
//   a = +prompt('Enter number a');
// } while (isNaN(a) || !a);

// do {
//   b = +prompt('Enter number b');
// } while (isNaN(b) || !b || b <= a);

// do {
//   h = +prompt('Enter step h');
// } while (isNaN(h) || !h || h < 0);

// document.write(`a = ${a}, b = ${b}, h = ${h} <br>`);

// sumOfFact = 0

// for (a; a <= b; a += h) {
//   for (j = 1, factorial = 1; j <= a; j++) {
//     factorial = factorial * j;
//   }
//   sumOfFact += factorial;
// }

// document.write('Sum of factorials is ', sumOfFact);