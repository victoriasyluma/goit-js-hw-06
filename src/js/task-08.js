const formInput = document.querySelector('.login-form');

const buttonLogin = document.querySelector('[type="submit"]');

formInput.addEventListener('submit', (event) => {
  event.preventDefault();

  const {
    elements: {
      email: { value: email },
      password: { value: password },
    },
  } = event.currentTarget;

  if (email === '' || password === '') {
    alert('All fields must be filled in');

    return;
  }

  const formData = {
    email,
    password,
  };

  console.log(formData);

  event.currentTarget.reset();
});
