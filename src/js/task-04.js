let counterValue = 0;

const spanValue = document.querySelector('#value');

const buttonDec = document.querySelector('button[data-action="decrement"]');
const buttonInc = document.querySelector('button[data-action="increment"]');

const updateSpan = () => {
  spanValue.textContent = counterValue;
};

buttonDec.addEventListener('click', () => {
  counterValue--;

  updateSpan();
});

buttonInc.addEventListener('click', () => {
  counterValue++;

  updateSpan();
});
