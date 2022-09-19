const input = document.querySelector('#font-size-control');
const span = document.querySelector('#text');

input.value = 0;

input.addEventListener('input', size);

function size() {
  span.style.fontSize = input.value + 'px';
}
