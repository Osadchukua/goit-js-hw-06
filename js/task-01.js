const titles = document.querySelectorAll('.item');
console.log('Number of categories:', titles.length);

titles.forEach(myFunction);

function myFunction(title) {

  console.log('Category:', title.firstElementChild.innerHTML);
  console.log('Elements:', title.lastElementChild.children.length);
}
