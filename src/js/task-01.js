const navList = document.querySelectorAll('.item');

const quantityOfCategories = navList.length;

console.log(`Number of categories: ${quantityOfCategories}`);

navList.forEach((item) => {
  const title = item.querySelector('h2');
  const list = item.querySelector('ul');

  const text = title.textContent;
  const quantityOfElements = list.children.length;

  console.log(`Category: ${text}`);
  console.log(`Elements: ${quantityOfElements}`);
});
