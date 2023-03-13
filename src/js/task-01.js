const navList = document.querySelectorAll('.item');

const quantityOfCategories = navList.length;

console.log(`Number of categories: ${quantityOfCategories}`);

navList.forEach((item) => {
  const [h2Title, ulList] = item.children;

  const title = h2Title.textContent;
  const quantityOfElements = ulList.children.length;

  console.log(`Category: ${title}`);
  console.log(`Elements: ${quantityOfElements}`);
});
