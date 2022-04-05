const burger = document.querySelector('.hamburger');
const header = document.querySelector('.header');
const navItems = document.querySelectorAll('.navitem2');
const previewContainer = document.querySelector('.preview-container');
const previewCard = document.querySelectorAll('.preview-card');

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

const buttons = {
  langs: ['HTML', 'Bootstrap', 'Ruby on Rails'],
  other: [['See Live', ''], ['See Source', '']]
}

let cardsArr = [
  {
    name: 'card1',
    image: 'Icons/img-placeholder2.1.png',
    title: 'Professional Art Printing Data',
    text: 'A daily selection of privately personalized reads; no accounts or sign-ups required; has been the industry\'s standard',
    link: {'project': '', 'source': ''}
  },
  {
    name: 'card2',
    image: 'Icons/img-placeholder2.1.png',
    title: 'Object-Oriented Programming',
    text: 'A daily selection of privately personalized reads; no accounts or sign-ups required; has been the industry\'s standard',
    link: {'project': '', 'source': ''}
  },
  {
    name: 'card3',
    image: 'Icons/img-placeholder2.1.png',
    title: 'Obsess No More With Your HTML',
    text: 'A daily selection of privately personalized reads; no accounts or sign-ups required; has been the industry\'s standard',
    link: {'project': '', 'source': ''}
  },
  {
    name: 'card4',
    image: 'Icons/img-placeholder2.1.png',
    title: 'Ruby Just Got Crazy',
    text: 'A daily selection of privately personalized reads; no accounts or sign-ups required; has been the industry\'s standard',
    link: {'project': '', 'source': ''}
  },
  {
    name: 'card5',
    image: 'Icons/img-placeholder2.1.png',
    title: 'Functional Programming? YES',
    text: 'A daily selection of privately personalized reads; no accounts or sign-ups required; has been the industry\'s standard',
    link: {'project': '', 'source': ''}
  },
  {
    name: 'card6',
    image: 'Icons/img-placeholder2.1.png',
    title: 'The Rabbit-Hole To End All Rabbit-Holes Just Got Deep!',
    text: 'A daily selection of privately personalized reads; no accounts or sign-ups required; has been the industry\'s standard',
    link: {'project': '', 'source': ''}
  },
];

let template = (obj) => {
  let div = document.createElement('div');
  div.classList.add('preview');
  let h3 = document.createElement('h3');
  h3.appendChild(document.createTextNode(obj.title))
  h3.classList.add('preview-title');
  let i = document.createElement('i');
  i.style.height = '12px';
  i.classList.add('cross-menu');
  let div1 = document.createElement('div');
  for (let btn of buttons.langs) {
    let button = document.createElement('button');
    button.appendChild(document.createTextNode(btn));
    div1.appendChild(button);
  }
  div1.classList.add('preview-langs');
  let img = document.createElement('img');
  img.src = 'Icons/img-placeholder2.1.png';
  img.alt = 'Showcase image.';
  img.classList.add('preview-img');
  let p = document.createElement('p');
  p.appendChild(document.createTextNode(obj.text));
  p.classList.add('preview-text')
  let div2 = document.createElement('div');
  div2.children = buttons.other.forEach(btn => {
    let button = document.createElement('button');
    button.appendChild(document.createTextNode(btn[0]));
    button.setAttribute.source = btn[1];
  });
  div2.classList.add('preview-buttons')
  div.appendChild(h3);
  div.appendChild(i);
  div.appendChild(div1);
  div.appendChild(img);
  div.appendChild(p);
  div.appendChild(div2);
  return div;
}

let templateFilled = template(cardsArr[1]);
document.getElementById('preview-container').appendChild(templateFilled);

document.querySelectorAll('.preview-container .preview-card').forEach(card => {
  card.addEventListener('click', () => {
    previewContainer.classList.add('active');
    let name = card.getAttribute('data-name');
    previewCard.forEach(preview => {
      let target = preview.getAttribute('data-target');
      if (name === target) {
        let templateFilled = template(cardsArr[1]);
        let div = document.getElementsByClassName('.preview-container');
        div.appendChild(templateFilled);
      }
    });
  });
});

previewCard.forEach(card => {
  card.querySelector('.cross-menu').addEventListener('click', () => {
    card.classList.remove('active');
    document.querySelector('.preview-container').classList.remove('active');
  });
});