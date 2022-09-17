const buttonDecrement = document.querySelector(
  '#counter button[data-action="decrement"]'
);
buttonDecrement.addEventListener('click', onClick);
console.log(buttonDecrement);

const valueEl = document.querySelector('#value');
console.log(valueEl);

function onClick(event) {
  console.log(event);
  console.log(event.currentTarget);
  console.dir(event.currentTarget);
  event.currentTarget.textContent = -111;
}
