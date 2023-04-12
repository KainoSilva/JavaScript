function pow(a, b) {
  let result = a;
  for (let i = 1; i < b; i++) {
    result *= a;
  }
  return result
}


document.write(pow(4, 3));


/* Second option */


// function pow(a, b) {
//   if (b != 1) {
//     return a * pow(a, b-1);
//   }
//   else {
//     return a;
//   }
// }

// document.write(pow(5, 3));