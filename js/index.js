import cardsArr from './cards.js';
import { cardTemplate, popUpTemplate } from './templates.js';

const burger = document.querySelector('.hamburger');
const header = document.querySelector('.header');
const navItems = document.querySelectorAll('.navitem2');
const previewContainer = document.querySelector('.preview-container');
const cards = document.getElementById('all-projects');

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

cardsArr.forEach((card) => {
  cards.appendChild(cardTemplate(card));
});

document.querySelectorAll('.grid-item-generic').forEach((card) => {
  const openProject = card.querySelector('.open-project');
  openProject.addEventListener('click', () => {
    let selectedCard;
    const name = card.getAttribute('data-name');
    cardsArr.forEach((card) => {
      if (card.name === name) {
        selectedCard = card;
      }
    });
    const templateFilled = popUpTemplate(previewContainer, selectedCard);
    previewContainer.innerHTML = '';
    previewContainer.appendChild(templateFilled);
    previewContainer.classList.toggle('active');
  });
});