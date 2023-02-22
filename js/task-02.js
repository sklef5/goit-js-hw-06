const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEl = document.querySelector('#ingredients')
let arrEl = []
ingredients.map(ingredient=>{
  const liEl = document.createElement('li');
  liEl.textContent=ingredient;
  liEl.classList.add('.item');
  arrEl.push(liEl);
})
console.log(arrEl)
ulEl.append(...arrEl)
