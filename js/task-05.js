const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');


const onInputChange = event => {
  event.currentTarget.value.trim() === '' ? output.textContent = "Anonymous" : null
  // if (event.currentTarget.value.trim() === '') {
  //   output.textContent = 'Anonymous';
  // } else {output.textContent = null
    
    output.textContent = event.currentTarget.value.trim();
  // }
}

input.addEventListener('input', onInputChange);

