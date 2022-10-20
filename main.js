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

function changeActiveLink(target) {
  if (target.classList.contains('active')) {
    return;
  }

  navLinks.forEach(link => link.classList.remove('active'));
  target.classList.add('active');
}

navLinks.forEach(link => {
  link.addEventListener('click', evt => changeActiveLink(evt.currentTarget));
});

const titles = Array.from(document.querySelectorAll('.section__title'));

document.addEventListener('scroll', () => {
  const rects = titles.map(title => title.getBoundingClientRect());
  const height = window.innerHeight;

  let index, prevBottom;
  for (let i = 0; i < rects.length; i++) {
    if (!index) {
      index = titles[i].dataset['linkIndex'];
      prevBottom = rects[i].bottom;
      continue;
    }
    if (rects[i].height <= rects[i] && rects[i].bottom <= height) {
      if (prevBottom < 0 || rects[i].bottom < prevBottom) {
        index = titles[i].dataset['linkIndex'];
        prevBottom = rects[i].bottom;
      }
    }
  }

  changeActiveLink(navLinks[index]);
});
// This works but does not give desired result
// const observer = new IntersectionObserver((entries, obs) => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       const index = entry.target.dataset['linkIndex'];
//       changeActiveLink(navLinks[index]);
//     }
//   });
// }, { threshold: 1 });

// titles.forEach(title => {
//   observer.observe(title);
// });
