function main(a, b, c) {
  a = typeof a !== 'undefined' ? a : 2;
  b = typeof b !== 'undefined' ? b : 3;
  if (typeof c === 'function')
    return c(sum(a, b));
  else
    return sum(a, b);
}

function sum(a, b) {
  return a + b;
}

console.log(main(undefined, undefined, function(c) {
  return c * 2;
}));

console.log(main(5, 8, function(c) {
  return c * 2;
}));

console.log(main(12, 33));