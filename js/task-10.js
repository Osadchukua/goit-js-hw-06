const getRandomHexColor = () => {
  const red = Math.round(Math.random(0, 1) * 255);
  const gteen = Math.round(Math.random(0, 1) * 255);
  const blue = Math.round(Math.random(0, 1) * 255);

  return `rgb(${red},${gteen},${blue})`;
};



const refs = {
  input: document.querySelector('input'),
  create: document.querySelector('button[data-create]'),
  destroy: document.querySelector('button[data-destroy]'),
  boxes: document.querySelector('#boxes'),
};

refs.create.addEventListener('click', createBoxes);
refs.destroy.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  amount = refs.input.value;
  const divBox = [];
  for (let i = 0, size = 30; i < amount; i += 1, size += 10) {
    const divEl = document.createElement('div');
    divEl.style.height = size + 'px';
    divEl.style.width = size + 'px';
    divEl.style.background = getRandomHexColor();
    divBox.push(divEl);
  }
  refs.boxes.append(...divBox);
  console.log(refs.boxes.append(...divBox));
  refs.input.value = '';
}

function destroyBoxes() {
  refs.input.value = '';
  refs.boxes.innerHTML = '';
}

refs.input.addEventListener('keydown', onEnterClck);

function onEnterClck(event) {
  if (event.code === 'Enter') createBoxes();
  refs.input.addEventListener('keydown', onEnterClck);
}

function onEskClick(event) {
  if (event.code === 'Enter') destroyBoxes();
}
