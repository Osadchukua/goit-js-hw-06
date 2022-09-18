const buttonAdd = document.querySelector(
  '#counter button[data-action="decrement"]');

const buttonRemoved = document.querySelector(
  '#counter button[data-action="increment"]');

const valueEl = document.querySelector('#value');

let counterValue = Number(valueEl.textContent);

buttonAdd.addEventListener('click', () => {
  counterValue += 1;
});

buttonRemoved.addEventListener('click', () => {
  counterValue -= 1;
});








// --------------------------------------------------------------

console.log(counterValue);












// let fontSizeValue = 1;

// function onClick(event) {
//   // console.log(event);
//   // console.log(event.currentTarget);
//   // console.dir(event.currentTarget);
//   // event.currentTarget.textContent = -111;
//   fontSizeValue += 1;
//   // console.log(valueEl);
//   // console.dir(valueEl);
//   console.dir(valueEl.style.fontSize);
//   valueEl.style.fontSize = fontSizeValue * 10 + 'px';
//   // valueEl.classList.toggle('invalid');
//   valueEl.classList.add('invalid');
// }