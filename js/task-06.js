const input = document.querySelector('#validation-input');
// console.log(input);

input.addEventListener('focus', onInputFocus)
input.addEventListener('blur', onInputBlur);

function onInputFocus() {
    console.log('onInputFocus');
}

function onInputBlur() {
  console.log('onInputBlur');
}





