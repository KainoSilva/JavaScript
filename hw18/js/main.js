let characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

function generateKey(a) {
  let leters = "";
  for (let i = 0; i <= a; i++) {
    leters += characters[Math.floor(Math.random() * a)];
  }
  return leters;
}

let key = generateKey(13, characters);
let key2 = generateKey(25, characters);
let key3 = generateKey(5, characters);
console.log(key);
console.log(key2);
console.log(key3);