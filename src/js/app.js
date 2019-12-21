/* Navigation */
const headerNav = document.querySelector('#header-nav');
const headerNavBtn = document.querySelector('#header-nav-btn');

function toggleNav() {
  headerNav.classList.toggle('active');
}

headerNavBtn.addEventListener('click', toggleNav);
