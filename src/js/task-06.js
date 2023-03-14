const validationInput = document.getElementById('validation-input');

const dataLength = validationInput.getAttribute('data-length');
console.log(dataLength);

validationInput.addEventListener('blur', () => {
  const isValidValue = validationInput.value.length <= Number(dataLength);

  if (isValidValue) {
    validationInput.classList.add('valid');
    validationInput.classList.remove('invalid');

    return;
  }

  validationInput.classList.add('invalid');
  validationInput.classList.remove('valid');
});
