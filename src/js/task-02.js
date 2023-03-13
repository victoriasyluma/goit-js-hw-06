const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.getElementById('ingredients');

ingredients.forEach((ingredient) => {
  const navItem = document.createElement('li');

  navItem.textContent = ingredient;
  navItem.classList.add('item');

  ingredientsList.append(navItem);
});
