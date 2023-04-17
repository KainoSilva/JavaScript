let time = +prompt('How many hours a day do you work?');
let sec = time * 3600;

if (time > 24) {
  alert('Do you rest at all?')
}
else {
  alert(`In seconds it will be - ${sec} seconds`);
}