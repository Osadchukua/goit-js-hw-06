const buttonRemoved = document.querySelector(
  '#counter button[data-action="decrement"]'
);

const buttonAdd = document.querySelector(
  '#counter button[data-action="increment"]'
);

const valueEl = document.querySelector('#value');
let counterValue = Number(valueEl.textContent);

buttonRemoved.addEventListener('click', () => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
});

buttonAdd.addEventListener('click', () => {
  counterValue += 1;
  valueEl.textContent = counterValue;
});

