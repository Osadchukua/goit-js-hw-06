const buttonRemoved = document.querySelector('button[data-action="decrement"]');

const buttonAdd = document.querySelector('button[data-action="increment"]');

const valueEl = document.querySelector('#value');

let nambe = 0;

buttonRemoved.addEventListener('click', () => {
  nambe -= 1;
  valueEl.textContent = nambe;
});

buttonAdd.addEventListener('click', () => {
  nambe += 1;
  valueEl.textContent = nambe;
});
