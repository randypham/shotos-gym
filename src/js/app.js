/* =============== MOBILE NAVIGATION TOGGLE =============== */

const headerNav = document.querySelector('#header-nav');
const headerNavBtn = document.querySelector('#header-nav-btn');

function toggleNav() {
  headerNav.classList.toggle('active');
}

headerNavBtn.addEventListener('click', toggleNav);

/* =============== HEADER BACKGROUND SCROLL CHANGE =============== */

const header = document.querySelector('#header');

function headerBackgroudChange() {
  if (window.scrollY > 100) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}

window.addEventListener('scroll', headerBackgroudChange);

/* =============== FREE WEEK PASS AND CONTACT FORM SUBMISSIONS  =============== */

const freePassForm = document.querySelector('#free-pass-form');
const contactForm = document.querySelector('#contact-form');

function formSubmission(form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();

    this.querySelector('.form-success').style.display = 'block';
    this.reset();
  });
}

if (freePassForm) {
  formSubmission(freePassForm);
}

if (contactForm) {
  formSubmission(contactForm);
}
