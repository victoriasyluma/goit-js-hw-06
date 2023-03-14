const formInput = document.querySelector('.login-form');

const emailInput = document.querySelector('[name="email"]');
// console.log(emailInput);

const passwordInput = document.querySelector('[name="password"]');
// console.log(passwordInput);
const buttonLogin = document.querySelector('[type="submit"]');

formInput.addEventListener('submit', (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (emailInput.value === '' || passwordInput.value === '') {
    alert('All fields must be filled in');
  }
  console.log(`Login: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
});
