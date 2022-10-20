import paintingsData from './data.js';

const btnPrevious = document.querySelector('.button-previous');
const btnNext = document.querySelector('.button-next');
let currentImg = 0;

function displayData(data) {
  const painting = document.querySelector('.work__content');

  painting.querySelector('.work__title').textContent = data.name;
  painting.querySelector('.work__year').textContent = data.year;
  painting.querySelector('.work__method').textContent = data.details;
  painting.querySelector('.work__dimensions').textContent = data.dimensions;

  const image = painting.querySelector('.work__image');
  image.src = data.image;
  image.alt = `${data.name} painting`;
}

btnPrevious.addEventListener('click', () => {
  const imgNumber = document.querySelector('.work__image-number');
  const numberOfImgs = paintingsData.length;

  currentImg = (currentImg + numberOfImgs - 1) % numberOfImgs;
  imgNumber.textContent = `${currentImg + 1}/${numberOfImgs}`;
  displayData(paintingsData[currentImg]);
});

btnNext.addEventListener('click', () => {
  const imgNumber = document.querySelector('.work__image-number');
  const numberOfImgs = paintingsData.length;

  currentImg = (currentImg + 1) % numberOfImgs;
  imgNumber.textContent = `${currentImg + 1}/${numberOfImgs}`;
  displayData(paintingsData[currentImg]);
});

const navLinks = document.querySelectorAll('.nav__item');

function changeActiveLink(evt) {
  const target = evt.currentTarget;
  if (target.classList.contains('active')) {
    return;
  }

  navLinks.forEach(link => link.classList.remove('active'));
  target.classList.add('active');
}

navLinks.forEach(link => {
  link.addEventListener('click', changeActiveLink);
});