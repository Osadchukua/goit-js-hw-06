function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const boxes = document.querySelector('#boxes');
console.dir(boxes);

const input = document.querySelector('input');
const amount = Number(input.tabIndex);
console.dir(amount);

function createBoxes(amount) {
  const liEl = document.createElement('div');
  
}