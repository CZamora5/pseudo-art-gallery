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