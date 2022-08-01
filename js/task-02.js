// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.


const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const arrayEl = [];


ingredients.forEach(ingredient => {
  const el = document.createElement('li');
  el.classList.add('item');
el.textContent = ingredient;
arrayEl.push(el)
});

const ulEl = document.querySelector('ul#ingredients');
ulEl.append(...arrayEl);