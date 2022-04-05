const burger = document.querySelector('.hamburger');
const header = document.querySelector('.header');
const navItems = document.querySelectorAll('.navitem2');

burger.addEventListener('click', () => {
  header.classList.toggle('active');
  burger.classList.toggle('cross-menu');
});

navItems.forEach((navItem) => {
  navItem.addEventListener('click', () => {
    header.classList.toggle('active');
    burger.classList.toggle('cross-menu');
  });
});