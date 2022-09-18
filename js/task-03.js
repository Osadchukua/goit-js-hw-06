const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const listEl = document.querySelector('.gallery');

const imagesEl = images
  .map(({ url, alt }) => {
    `<li><img src="${url}" alt="${alt}"></li>`;
  })
  .join('');

listEl.insertAdjacentHTML('afterbegin', imagesEl);

console.log(imagesEl);

// const listEl = document.querySelector('.gallery');
// const li = '<li> ghgh </li>'

// listEl.insertAdjacentHTML('afterbegin', li);

// const liEl = images.map(image => {
//   <li class="list-item">
//     <img src="${image.url}" alt="${image.alt}"></img>
//   </li>;
// }).join('')

// listEl.insertAdjacentHTML('afterbegin', liEl);

// gnfg

// const listEl = document.querySelector('.gallery');
// // console.log(listEl);

// const imagesEl = images.map(element => {
//   const liEl = document.createElement('li');
//   liEl.style.src = '${images.url}';
//   liEl.style.alt = '${images.alt}';
//   return liEl;
// });
// console.log(imagesEl);

// listEl.insertAdjacentHTML('afterbegin', imagesEl);

// const listEl = document.querySelector('.gallery');
// console.log(listEl);

// const liEl = images
//   .map(image => {
//     <img src="${image.url}" alt="${image.alt}"></img>;
//   })
//   .join('');

// listEl.insertAdjacentHTML('afterbegin', liEl);

// const ulEl = document.createElement('ul')
// ulEl.classList.add('gallery');
// console.log(ulEl);

// const imageEl = document.createElement('img');
// imageEl.setAttribute('alt', 'images: alt');
// console.log(imageEl);

// const image2 = document.createElement('img');
// image2.setAttribute(images, url);
// console.log(image2);

// const galleryEl = document.querySelector('.gallery');
// console.log(galleryEl);

// const liEl = document.createElement('li')
// console.log(liEl);

// const imgEl = images
// console.log(imgEl);

// const listEl = document.querySelector('.gallery');
// console.log(listEl);

// const liEl = images.map(image => {
//   <li class="list-item">
//     <img src="${image.url}" alt="${image.alt}"></img>
//   </li>;
// }).join('')

// listEl.insertAdjacentHTML('afterbegin', liEl);

// ----------------------
// const galleryEl = document.querySelector('.gallery');
// // console.log(galleryEl);

// const arrLi = images.map(element => {

//   const liEl = document.createElement('li');
//   liEl.classList.add('image');
//   liEl.alt = images.alt;
//   liEl.src = images.url;
//   return liEl;
// });

// console.log(arrLi);
// galleryEl.append(...arrLi);
