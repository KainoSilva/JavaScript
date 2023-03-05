let x = +prompt('Enter first number', 2);
let y = +prompt('Second first number', 2);

let sum = x + y;
let difference = x - y;
let multiplier = x * y;
let divisor = x / y;

console.log(`${x} + ${y} = ${sum} 
${x} - ${y} = ${difference} 
${x} * ${y} = ${multiplier} 
${x} / ${y} = ${divisor}`);

alert(`${x} + ${y} = ${sum} 
${x} - ${y} = ${difference} 
${x} * ${y} = ${multiplier}
${x} / ${y} = ${divisor}`);



/* Second option */

// let firstNumber = +prompt('Enter first number', 2);
// let secondNumber = +prompt('Second first number', 2);
// let sign = prompt("+, -, *, /");
// let res;

// if (sign == "+") {
//     res = (firstNumber + secondNumber);
//     console.log(`${firstNumber} + ${secondNumber} = ${res}`);
//     alert(`${firstNumber} + ${secondNumber} = ${res}`);
// }
// if (sign == "-") {
//     res = (firstNumber - secondNumber);
//     console.log(`${firstNumber} - ${secondNumber} = ${res}`);
//     alert(`${firstNumber} + ${secondNumber} = ${res}`);
// }
// if (sign == "*") {
//     res = (firstNumber * secondNumber);
//     console.log(`${firstNumber} * ${secondNumber} = ${res}`);
//     alert(`${firstNumber} + ${secondNumber} = ${res}`);
// }
// if (sign == "/") {
//     res = (firstNumber / secondNumber);
//     console.log(`${firstNumber} / ${secondNumber} = ${res}`);
//     alert(`${firstNumber} + ${secondNumber} = ${res}`);
// }