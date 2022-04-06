const burger = document.querySelector('.hamburger');
const header = document.querySelector('.header');
const navItems = document.querySelectorAll('.navitem2');
const previewContainer = document.querySelector('.preview-container');

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

const cardsArr = [
  {
    name: 'card1',
    image: 'Icons/img-placeholder2.png',
    title: 'Professional Art Printing Data',
    text: 'A daily selection of privately personalized reads; no accounts or sign-ups required; has been the industry\'s standard',
    link: { project: '', source: '' },
    buttons: {
      langs: ['HTML', 'Bootstrap', 'Ruby on Rails'],
      other: [['See Live', ''], ['See Source', '']],
    },
  },
  {
    name: 'card2',
    image: 'Icons/img-placeholder2.1.png',
    title: 'Object-Oriented Programming',
    text: 'A daily selection of privately personalized reads; no accounts or sign-ups required; has been the industry\'s standard',
    link: { project: '', source: '' },
    buttons: {
      langs: ['CSS', 'Bootstrap', 'Ruby on Rails'],
      other: [['See Live', ''], ['See Source', '']],
    },
  },
  {
    name: 'card3',
    image: 'Icons/img-placeholder1.png',
    title: 'Obsess No More With Your HTML',
    text: 'A daily selection of privately personalized reads; no accounts or sign-ups required; has been the industry\'s standard',
    link: { project: '', source: '' },
    buttons: {
      langs: ['python', 'Bootstrap', 'Ruby on Rails'],
      other: [['See Live', ''], ['See Source', '']],
    },
  },
  {
    name: 'card4',
    image: 'Icons/img-placeholder2.1.png',
    title: 'Ruby Just Got Crazy',
    text: 'A daily selection of privately personalized reads; no accounts or sign-ups required; has been the industry\'s standard',
    link: { project: '', source: '' },
    buttons: {
      langs: ['HTML', 'Bootstrap', 'Ruby on Rails'],
      other: [['See Live', ''], ['See Source', '']],
    },
  },
  {
    name: 'card5',
    image: 'Icons/img-placeholder2.1.png',
    title: 'Functional Programming? YES',
    text: 'A daily selection of privately personalized reads; no accounts or sign-ups required; has been the industry\'s standard',
    link: { project: '', source: '' },
    buttons: {
      langs: ['HTML', 'Bootstrap', 'Ruby on Rails'],
      other: [['See Live', ''], ['See Source', '']],
    },
  },
  {
    name: 'card6',
    image: 'Icons/img-placeholder2.1.png',
    title: 'The Rabbit-Hole To End All Rabbit-Holes Just Got Deep!',
    text: 'A daily selection of privately personalized reads; no accounts or sign-ups required; has been the industry\'s standard',
    link: { project: '', source: '' },
    buttons: {
      langs: ['HTML', 'Bootstrap', 'Ruby on Rails'],
      other: [['See Live', ''], ['See Source', '']],
    },
  },
];

const template = (obj) => {
  const div = document.createElement('div');
  div.classList.add('preview');

  const divTop = document.createElement('div');
  divTop.classList.add('preview-divtop');
  const h3 = document.createElement('h3');
  h3.appendChild(document.createTextNode(obj.title));
  h3.classList.add('preview-title');
  const divIcon = document.createElement('div');
  const i = document.createElement('i');
  i.style.height = '12px';
  i.classList.add('cross-menu2');
  i.addEventListener('click', () => {
    previewContainer.classList.toggle('active');
  });
  divIcon.appendChild(i);
  divTop.appendChild(h3);
  divTop.appendChild(i);

  const div1 = document.createElement('div');
  obj.buttons.langs.forEach((btn) => {
    const button = document.createElement('button');
    button.appendChild(document.createTextNode(btn));
    div1.appendChild(button);
  });
  div1.classList.add('preview-langs');

  const img = document.createElement('img');
  img.src = obj.image;
  img.alt = 'Showcase image.';
  img.classList.add('preview-img');

  const p = document.createElement('p');
  p.appendChild(document.createTextNode(obj.text));
  p.classList.add('preview-text');

  const div2 = document.createElement('div');
  obj.buttons.other.forEach((btn) => {
    const button = document.createElement('button');
    const [a, b] = btn;
    button.appendChild(document.createTextNode(a));
    button.setAttribute.source = b;
    button.classList.add('see-project');
    button.setAttribute('id', 'open-project');
    div2.appendChild(button);
  });
  div2.classList.add('preview-buttons');

  div.appendChild(divTop);
  div.appendChild(div1);
  div.appendChild(img);
  div.appendChild(p);
  div.appendChild(div2);
  return div;
};

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
    const templateFilled = template(selectedCard);
    previewContainer.innerHTML = '';
    previewContainer.appendChild(templateFilled);
    previewContainer.classList.toggle('active');
  });
});