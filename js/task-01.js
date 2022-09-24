const titles = document.querySelectorAll('.item');
console.log('Number of categories:', titles.length);

titles.forEach(myFunction);

function myFunction(title) {

  console.log('Category:', title.firstElementChild.innerHTML);
  console.log('Elements:', title.lastElementChild.children.length);
}




// const makeChangeColor = function(){
//   const changeColor = function(color){
//     this.color = color;
//     console.log('changeColor -> this', this)
//   }
//    const sweater = {
//     color:'teal',
//    }
//    sweater.updateColor = changeColor;

//    return sweater.updateColor.bind(sweater);
// }
// const sweatColor = makeChangeColor();
// sweatColor('blue');


// -------------------------------------

// let user ={
//   firstName: 'Poly',
// sayHi() {
//   let arrow = () => console.log(this.firstName);
//   arrow();
// }
// }
// user.sayHi();
