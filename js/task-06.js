const input = document.querySelector('#validation-input');

const lengthEL = Number(input.dataset.length);

input.addEventListener('blur', onOutBlur);

function onOutBlur() {
  if (input.value.length === lengthEL) {
    input.classList.remove('invalid');
    input.classList.add('valid');
  } else {
    input.classList.remove('valid');
    input.classList.add('invalid');
  }
}
