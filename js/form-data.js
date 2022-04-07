const formReloads = document.querySelector('#form');

let formData = {
  name: '',
  email: '',
  comments: ''
}

localStorage = localStorage.length > 0 ? localStorage : formData;

function itemListens(inputType) {
  formReloads.elements[inputType].addEventListener('input', () => {
    localStorage[inputType] = formReloads.elements[inputType].value;
  });
}

function setItem(inputType) {
  if (localStorage[inputType] !== '') {
    formReloads.elements[inputType].value = localStorage[inputType];
  }
}

itemListens('full-name');
setItem('full-name');