const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


// ============================================================

const ingred = document.querySelector('#ingredients');

const arrLi = ingredients.map(element => {
    const liEl = document.createElement('li');
    liEl.textContent = element;
    liEl.class = 'item';

    return liEl;
})

ingred.append(...arrLi);

console.log(arrLi);

// ============================================================

// // const ingred = document.querySelector('#ingredients');

// // const arrLi = [];

// // for (let i = 0; i < ingredients.length; i += 1) {
// //   const element = ingredients[i];

//   // const liEl = document.createElement('li');
//   // liEl.textContent = element;
//   // liEl.class = 'item';

//   // arrLi.push(liEl);
// // }

// // ingred.append(...arrLi);

// ============================================================
