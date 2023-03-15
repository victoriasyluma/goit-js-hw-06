const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.getElementById('ingredients');

ingredientsList.innerHTML = ingredients
  .map((ingredient) => `<li class="item">${ingredient}</li>`)
  .join('');
