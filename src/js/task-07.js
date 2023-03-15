const rangeInput = document.getElementById('font-size-control');

const textInput = document.getElementById('text');

rangeInput.addEventListener('input', (event) => {
  const { value } = event.target;

  textInput.style.fontSize = `${value}px`;
});
