const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

// const onInputChange = event => {

//   if (event.currentTarget.value.trim() === '') {
//     output.textContent = 'Anonymous';
//   } else {output.textContent = null

//     output.textContent = event.currentTarget.value.trim();
//   }
// }

// input.addEventListener('input', onInputChange);

// -----------------------------------------------------

const onInputChange = event => {
  event.currentTarget.value === ''
    ? (output.textContent = 'Anonymous')
    : output.textContent = event.currentTarget.value.trim();
};

input.addEventListener('input', onInputChange);
