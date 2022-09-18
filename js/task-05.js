const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', onInputChange);

function onInputChange(event) {
  output.textContent = event.currentTarget.value;
}

// const input = document.querySelector('#name-input');
// const output = document.querySelector('#name-output');

// input.addEventListener('input', onInputChange);
// // input.addEventListener('input', onInputChange, { once: true }); - через третє значення { once: true }, функція запускається тільки один раз

// // output.addEventListener('input', onInputChange, );

// function onInputChange(event) {
//   // console.log(event.currentTarget.value);
//   output.textContent = event.currentTarget.value;
//
//
//
//
//
//
//
//
// event.preventDefault() - скасовує пересилання з посилання відміняє дефолтну поведінку по замовчуванню

