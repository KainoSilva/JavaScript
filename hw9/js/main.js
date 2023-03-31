let arrA = new Array(+prompt('Enter array length'));
let arrB = [];

console.log(arrA);

getPrime:
for (let i = 0; i < arrA.length; i++) {
  arrA[i] = Math.floor(Math.random(i) * 50);

  for (let j = 2; j < arrA[i]; j++) {
    if (arrA[i] % j == 0) {
      continue getPrime;
    }
  }

  arrB[i] = arrA[i];
}

document.write(`arrA: ${arrA}`, '<br><br>');
arrB = arrB.filter(Boolean);
document.write(`arrB: ${arrB}`, '<br><br>');

minValue = maxValue = arrB[0];

for (let i = 0; i < arrB.length; i++) {
  if (arrB[i] < minValue && arrB[i] > 1) {
    minValue = arrB[i];
  }
  else if (arrB[i] > maxValue) {
    maxValue = arrB[i];
  }
}

document.write(`Min value is ${minValue}`, '<br><br>')
document.write(`Max value is ${maxValue}`, '<br><br>')



/*-----------------Second Decision------------------*/



// let arrA = [];
// let arrB = [];
// let arrLength = +prompt('Enter array length');

// for (let i = 0; i < arrLength; i++) {
//   arrA[i] = Math.floor(Math.random(i) * 50);
//   console.log(arrA[i]);

//   for (let j = 2; j < arrA[i] - 1; j++) {
//     console.log(arrA);

//     if (arrA[i] % j == 0) {
//       break;
//     }

//     arrB.push(arrA[i]);
//   }
// }

// document.write(`arrA: ${arrA}`, '<br><br>');
// document.write(`arrB: ${arrB}`, '<br><br>');

// minValue = maxValue = arrB[0];

// for (let i = 0; i < arrB.length; i++) {
//   if (arrB[i] < minValue && arrB[i] > 1) {
//     minValue = arrB[i];
//   }
//   else if (arrB[i] > maxValue) {
//     maxValue = arrB[i];
//   }
// }

// document.write(`Min value is ${minValue}`, '<br><br>')
// document.write(`Max value is ${maxValue}`, '<br><br>')
