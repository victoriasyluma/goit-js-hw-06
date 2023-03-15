function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('#controls input[type="number"]');
const buttonCreate = document.querySelector('#controls button[data-create]');
const buttonDestroy = document.querySelector('#controls button[data-destroy]');
const divBoxes = document.querySelector('#boxes');
let dimension = 30;

const createBoxes = (amount) => {
  const listOfBoxes = [];

  for (let index = 0; index < amount; index = index + 1) {
    const box = document.createElement('div');
    const dimensionString = `${dimension}px`;
    const color = getRandomHexColor();

    box.style.height = dimensionString;
    box.style.width = dimensionString;
    box.style.backgroundColor = color;

    listOfBoxes.push(box);

    dimension = dimension + 10;
  }

  divBoxes.append(...listOfBoxes);
};

buttonCreate.addEventListener('click', () => {
  const amount = input.value;

  createBoxes(amount);
});

buttonDestroy.addEventListener('click', () => {
  divBoxes.innerHTML = '';
  input.value = '';
});
