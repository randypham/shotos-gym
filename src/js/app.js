/* Mobile Navigation Toggle  */
const headerNav = document.querySelector('#header-nav');
const headerNavBtn = document.querySelector('#header-nav-btn');

function toggleNav() {
  headerNav.classList.toggle('active');
}

headerNavBtn.addEventListener('click', toggleNav);

/* Header Background Scroll Change */
const header = document.querySelector('#header');

function headerBackgroudChange() {
  if (window.scrollY > 100) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}

window.addEventListener('scroll', headerBackgroudChange);
