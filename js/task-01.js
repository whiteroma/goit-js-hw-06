const El = document.querySelector("ul").children.length;
console.log("Number of categories:", El);

const ul = document.querySelectorAll("#categories>li");
ul.forEach((el) => {
  console.log(
    `Категория: ${el.firstElementChild.textContent}, Количество элементов: ${el.lastElementChild.children.length}`
  );
});
