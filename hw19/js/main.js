let block = document.querySelector('.block');
const randWidth = window.innerWidth - block.offsetWidth;
const randHeight = window.innerHeight - block.offsetHeight;


function randColor(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

setInterval(() => {
  block.style.backgroundColor = `rgb(${randColor(0, 255)}, ${randColor(0, 255)}, ${randColor(0, 255)})`
}, 700);

setInterval(() => {
  block.style.left = randColor(0, randWidth) + 'px';
  block.style.top = randColor(randHeight, 0) + 'px';
}, 700);