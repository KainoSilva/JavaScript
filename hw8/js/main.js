//   ------------Task 1 and 2-------------

let array1 = [];
let array2 = [];

for (let i = 10; i <= 20; i++) {
  array1.push(i);
  array2.push(i * i);

}

document.write(array1.join(', '), '<br><br>');
document.write(array2.join(', '), '<br><br>');

//   ------------Task 3-------------

let array3 = [];

for (let i = 1; i <= 10; i++) {
  array3.push(`7 * ${i} = ${7 * i}`);
}

document.write(array3.join('; <br>'), '<br><br>');

//   ------------Task 4-------------

let array4 = [];
let sum = 0;

for (let i = 1; i <= 15; i++) {
  array4.push(i);
  sum += i;
}

document.write(array4.join(' + '), ` = ${sum}`, '<br><br>');

//   ------------Task 5-------------

let array5 = [];
let multiplication = 1;

for (let i = 15; i <= 35; i++) {
  array5.push(i);
  multiplication *= i;
}

document.write(array5.join(' * '), ` = ${multiplication}`, '<br><br>');

//   ------------Task 6-------------

let array6 = [];
let arraySum = 0;

for (let i = 1; i <= 500; i++) {
  array6.push(i);
  arraySum += i;
}

document.write(`${arraySum} / ${array6.length} = ${arraySum / array6.length}`, '<br><br>');

//   ------------Task 7-------------

let array7 = [];
let evenSum = 0;

for (let i = 30; i <= 80; i++) {
  if (i % 2 == 0) {
    evenSum += i;
    array7.push(i);
  }
}

document.write(array7.join(' + '), ` = ${evenSum}`, '<br><br>');

//   ------------Task 8-------------

let array8 = [];
let multiplOf = 0;

for (let i = 100; i <= 200; i++) {
  if (i % 3 == 0) {
    multiplOf = i;
    array8.push(i);
  }
}

document.write(array8.join(', '), '<br><br>');

//   ------------Task 9-------------

let array9 = [];
let naturalNum = 88;

for (let i = 1; i <= naturalNum; i++) {
  if (naturalNum % i == 0) {
    array9.push(i);
  }
}

document.write(`All divisors of ${naturalNum}: ${array9.join(', ')}`, '<br><br>');

//   ------------Task 10-------------

let array10 = [];

for (let i = 0; i < array9.length; i++) {
  if (array9[i] % 2 == 0) {
    array10.push(array9[i]);
  }
}

document.write(`Quantity of even divisors of number ${naturalNum} is ${array10.length}`, '<br><br>');

//   ------------Task 11-------------

let evenDivSum = 0;

for (let i = 0; i < array10.length; i++) {
  evenDivSum += array10[i];
}

document.write(`Sum of even divisors of number ${naturalNum} is ${evenDivSum}`, '<br><br>');

//   ------------Task 12-------------

let array12 = [];

document.write('<table style = "border-collapse: collapse; border-spacing: 0; text-align: center;" >');

for (var i = 1; i <= 10; i++) {
  document.write('<tr style ="border: 1px solid black;">');
  array12[i - 1] = [];

  for (var j = 1; j <= 10; j++) {
    document.write(`<td style ="border: 1px solid black;">${array12[i - 1][j - 1] = i * j}</td>`);
  }

  document.write('</tr>');
}
document.write('</table>');