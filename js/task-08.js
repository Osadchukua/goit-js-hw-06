const form = document.querySelector('.login-form');

form.addEventListener('submit', onSubmit);

function onSubmit(evt) {
  evt.preventDefault();
  const { email, password } = evt.currentTarget.elements;
  const data = {
    email: email.value,
    password: password.value,
  };
  console.log(data);

  if (email.value === '' || password.value === '') {
    return alert('Всі поля повинні бути заповнені!');
  }

  console.log(`Email: ${email.value}, Password: ${password.value}`);
  evt.currentTarget.reset();
}
