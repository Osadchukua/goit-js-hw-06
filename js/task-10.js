function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector('input');
console.dir(input.textContent);
console.dir(input.value);
console.log(input);

const create = document.querySelector('button[data-create]');
// console.dir(create.innerHTML);

const destroy = document.querySelector('button[data-destroy]');
// console.dir(destroy.innerHTML);

const boxes = document.querySelector('#boxes');
// console.log(boxes);

const boxValue = 30;
// -----------------------------------------------------------

const createBoxes = amount => {
  amount = input.value;

  const divEl = document.createElement('div');
  divEl.classList.add('box');
  divEl.style.backgroundColor = getRandomHexColor();

  divEl.style.height = boxValue + 'px';
  divEl.style.width = boxValue + 'px';
  
  boxes.append(divEl);
};

const destroyBoxes = () => {
  const divBox = document.querySelector('.box');
  divBox.remove();
};

create.addEventListener('click', createBoxes);
destroy.addEventListener('click', destroyBoxes);
