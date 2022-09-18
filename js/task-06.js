const input = document.querySelector('#validation-input');

const lengthEL = Number(input.dataset.length);

input.addEventListener('blur', onOutBlur);

function onOutBlur() {
  if (input.value.length === lengthEL) {
    input.classList.remove('invalid');
    return input.classList.add('valid');
  } else {
    input.classList.remove('valid');
    return input.classList.add('invalid');
  }
}
