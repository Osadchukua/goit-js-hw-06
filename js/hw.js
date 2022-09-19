// Навігація по DOM -------------------------------------

// console.log(document);

// const body = document.body;
// console.log(body);

// const list = body.firstElementChild;
// console.log(list);

// const firstListItem = list.firstElementChild;
// console.log(firstListItem);

// const listItems = list.children;
// console.log(listItems);

// Пошук елементів -----------------------------------

// const listWithId = document.querySelector('#menu');
// // listWithId.style.textTransform = 'uppercase';
// listWithId.style.fontSize = '29px';
// console.log(listWithId);

// const listWithClass = document.querySelector('.menu');
// listWithClass.style.textTransform = 'uppercase';
// // listWithClass.style.fontSize = '24px';
// console.log(listWithClass);

// const menuItemsByTagName = document.querySelectorAll('li');
// console.log(menuItemsByTagName);

// const menuItemsByClass = document.querySelectorAll('.menu-item');
// console.log(menuItemsByClass);

// const firstMenuItem = document.querySelector('.menu-item');
// firstMenuItem.style.color = 'tomato';
// console.log(firstMenuItem);

// Властивості та атрибути ------------------------------

// //===================================================
// const message = document.querySelector('#message');
// console.log(message.value); // Default textarea message

// //===================================================
// const activeLink = document.querySelector('.btn.active');
// console.log(activeLink.href); // https://s.codepen.io/about

// //===================================================
// const image = document.querySelector('.image');
// console.log(image.src); // https://placeimg.com/640/480/animals
// image.src = 'https://placeimg.com/640/480/tech';

// Властивість style -------------------------------------

// const button = document.querySelector(".btn");

// button.style.backgroundColor = "teal";
// button.style.fontSize = "34px";
// button.style.textAlign = "center";

// console.log(button.style); // inline styles object

// Властивість textContent ---------------------

// const text = document.querySelector('.article-text');
// console.log(text.textContent); // text inside p.article-text

// const title = document.querySelector('.article-title');
// title.textContent = 'Welcome to Bahamassrtjhsrth!';

// Властивість classList -------------------------------

// const text = document.querySelector('#paragraph');

// console.log(text.classList); // ["text", "red", "big", value: "text red big"]

// console.log(text.classList.contains('red')); // true

// text.classList.remove('big');
// console.log(text.classList); // ["text", "red", value: "text red"]

// text.classList.add('new-class');
// console.log(text.classList); // ["text", "red", "new-class", value: "text red new-class"]

// // Can add multiple classes
// text.classList.add('a', 'b', 'c');
// console.log(text.classList);

// text.classList.remove('a', 'b', 'c');

// text.classList.toggle('is-hidden'); // will add is-hidden class
// text.classList.toggle('is-hidden'); // will remove is-hidden class

// // classList has a forEach method
// text.classList.forEach(cls => {
//   console.log(cls); // text, red, new-class
// });

// Атрибути ---------------------------------

// const image = document.querySelector(".image");

// console.log(image.attributes); // NamedNodeMap {0: class, 1: src, 2: alt, length: 3}

// console.log(image.hasAttribute("src")); // true

// console.log(image.getAttribute("alt")); // "Lake and clouds"

// image.setAttribute("alt", "Amazing nature");

// console.log(image.getAttribute("alt")); // Amazing nature

// data - атрибути -------------------------------------------

// const saveBtn = document.querySelector('.editor button[data-action="save"]');
// const closeBtn = document.querySelector('.editor button[data-action="close"]');

// console.log(saveBtn.dataset.action); //save
// console.log(closeBtn.dataset.action); //close

// const dishes = document.querySelectorAll('.dishes > li');
// dishes.forEach(dish => {
//   console.log(dish.dataset.id);
// });

// -----------------------------------------

// const saveBtn = document.querySelector('button[data-action="save"]');
// console.log(
//   document.querySelector('button[data-action="save"]').dataset.action
// ); // "save"

// const closeBtn = document.querySelector('button[data-action="close"]');
// console.log(closeBtn.dataset.action); // "close"

// Створення та видалення елементів ---------------------------------------
// Створення;

// document.createElement(tagName);

// --------------

// const heading = document.createElement("h1");
// console.log(heading); // <h1></h1>

// heading.textContent = "This is a heading";
// console.log(heading); // <h1>This is a heading</h1>

// const image = document.createElement("img");
// image.src = "https://placeimg.com/640/480/nature";
// image.alt = "Nature";
// console.log(image); // <img src="https://placeimg.com/640/480/nature" alt="Nature" />

// Додавання;--------------------------------------------

// const list = document.querySelector('.usernames');

// // Adds an item to the end of the list
// const lastItem = document.createElement('li');
// lastItem.textContent = 'Poly';
// list.append(lastItem);

// // Adds an item to the beginning of the list
// const firstItem = document.createElement('li');
// firstItem.textContent = 'Ajax';
// list.prepend(firstItem);

// // Adds a title before the list
// const title = document.createElement('h2');
// title.textContent = 'USERNAMES';
// list.before(title);

// // Adds a paragraph after the list
// const text = document.createElement('p');
// text.textContent =
//   'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum tenetur assumenda fugiat maxime, soluta aspernatur quasi nihil in asperiores ad distinctio illo et debitis error iure voluptate numquam maiores nisi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum tenetur assumenda fugiat maxime, soluta aspernatur quasi nihil in asperiores ad distinctio illo et debitis error iure voluptate numquam maiores nisi!';
// list.after(text);

// Видалення;------------------------------------------------------------

// const text = document.querySelector('.text');
// text.remove();

// Властивість innerHTML------------------------------------

// const article = document.querySelector('.article');
// console.log(article.innerHTML);

// const title = document.querySelector('.article .title');
// console.log(title.innerHTML);

// const text = document.querySelector('.article .text');
// console.log(text.innerHTML);

// const link = document.querySelector('.article .link');
// console.log(link.innerHTML);

// Зміна; --------------------------------------------------

// const title = document.querySelector('.article .title');
// title.innerHTML = 'New and <span class="accent">improved</span> title';

// const title = (document.querySelector('.article .title').innerHTML =
//   'Newsss and <span class="accent">improved</span> title');

// const text = (document.querySelector('.article .text').innerHTML =
//   'slejrg gsfgbskj pfsjgp pjor okjg  soroserg;erijgei');

// -------------------------------

// const technologies = ['HTML', 'CSS', 'JavaScript', 'React', 'Node', 'lfkgjdl'];
// const list = document.querySelector('.list');

// const markup = technologies
//   .map(technology => `<li class="list-item">${technology}</li>`)
//   .join('');

// // // Check the console, you'll see a single string with HTML tags
// console.log(markup);

// // // Adding all the markup in one operation
// list.innerHTML = markup;

// Додавання; ---------------------------------------------------------------

// const article = document.querySelector('.article');
// const htmlString = `
// <h2>   Article title   </h2>
// <p class="article-text">Nullam quis ante. <br> Vestibulum dapibus nunc ac augue. In consectetuer turpis ut velit.</p>

// <a class="link" href="#">Read more...</a>`;

// // Replace += with = operator. See the difference?
// // Article title is lost because we overwrite element content.
// article.innerHTML += htmlString;

// ---------------------------

// const list = document.querySelector('.list');

// const newTechnologies = ['React', 'TypeScript', 'Node.js'];
// const markup = newTechnologies
//   .map(
//     technology => `
//         <li
//         class="list-item new">
//         ${technology}
//         </li>
//         `
//   )
//   .join('');

// list.insertAdjacentHTML('beforebegin', '<h2>Popular technologies</h2>');
// list.insertAdjacentHTML('beforeend', markup);





// const images = [
//   {
//     url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'White and Black Long Fur Cat',
//   },
//   {
//     url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
//   },
//   {
//     url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'Group of Horses Running',
//   },
// ];


// // const image = document.querySelector(".image");

// // console.log(image.attributes); // NamedNodeMap {0: class, 1: src, 2: alt, length: 3}

// // console.log(image.hasAttribute("src")); // true

// // console.log(image.getAttribute("alt")); // "Lake and clouds"

// // image.setAttribute("alt", "Amazing nature");

// // console.log(image.getAttribute("alt")); // Amazing nature


// const image2 = document.createElement('img')
// image2.setAttribute(images, url);
// // console.log(image2);

// // image2.hasAttribute(url);




// const addListenerBtn = document.querySelector('[data-action="add"]');
// const removeListenerBtn = document.querySelector('[data-action="remove"]');
// const btn = document.querySelector('#btn');

// const handleClick = () => {
//   console.log('click event listener callback');
// };

// addListenerBtn.addEventListener('click', () => {
//   btn.addEventListener('click', handleClick);
//   console.log('click event listener was added to btn');
// });

// removeListenerBtn.addEventListener('click', () => {
//   btn.removeEventListener('click', handleClick);
//   console.log('click event listener was removed from btn');
// });


const select = document.querySelector('.pizza-select');
const textOutput = document.querySelector('.text-output');
const valueOutput = document.querySelector('.value-output');

setOutput();

select.addEventListener('change', setOutput);

function setOutput() {
  const selectedOptionValue = select.value;
  const selectedOptionIndex = select.selectedIndex;
  const selectedOptionText = select.options[selectedOptionIndex].text;

  textOutput.textContent = selectedOptionText;
  valueOutput.textContent = selectedOptionValue;
}