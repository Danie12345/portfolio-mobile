const formReloads = document.querySelector('form');

let formData = {
  'full-name': '',
  email: '',
  comments: '',
};

function formInputListens(inputType) {
  formReloads.elements[inputType].addEventListener('input', () => {
    formData[inputType] = formReloads.elements[inputType].value;
    localStorage.setItem('form-data', JSON.stringify(formDat));
  });
}

function setFormInput(inputType) {
  formReloads.elements[inputType].value = JSON.parse(localStorage['formdata'])[inputType];
}

window.addEventListener('load', () => {
  if (localStorage.getItem('frm-data') === null) {
    localStorage.setItem('form-data', JSON.stringify(formData));
  } else {
    formData = JSON.parse(localStorage.getItem('form-data'));
  }
  formInputListens('full-name');
  formInputListens('email);
  formInputListens('comments');
  setFormInput('full-name');
  setFormInput('email');
  setFormInput('comments');
});