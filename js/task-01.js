const categoriesList = document.querySelector("ul#categories");
const numberOfCategories = categoriesList.children.length;

console.log(`Number of categories: ${numberOfCategories}`);
for (let i = 0; i < numberOfCategories; i++) {
  const category = categoriesList.children[i];
  const categoryName = category.querySelector("h2").textContent;
  const categoryElements = category.querySelectorAll("li").length;

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryElements}`);
}
