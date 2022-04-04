const burger = document.querySelector('.hamburger');
const header = document.querySelector('.header');

burger.addEventListener('click', () => {
  header.classList.toggle('active');
})