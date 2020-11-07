const header = document.querySelector('.main-header');
const logoImg = document.querySelector('.logoImg');

window.addEventListener('scroll', () => {
  const scrollPos = window.scrollY;
  if (scrollPos > 10) {
    header.classList.add('scrolled');
    logoImg.src = 'dist/img/logo-white.PNG';
  } else {
    header.classList.remove('scrolled');
    logoImg.src = 'dist/img/logo-plain.PNG';
  };
});
