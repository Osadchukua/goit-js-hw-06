const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingred = document.querySelector('#ingredients');

const arrLi = ingredients.map(element => {
  const liEl = document.createElement('li');
  liEl.textContent = element;
  liEl.classList.add('item');
  
  return liEl;
});

ingred.append(...arrLi);