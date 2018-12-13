const favPets = document.querySelector('.firstQuestion div');
const catFacts = document.querySelector('.secondQuestion div');
const favDog = document.querySelector('#dog');
const favCat = document.querySelector('#cat');
const favFish = document.querySelector('#fish');
const nope = document.querySelector('#no');
const yep = document.querySelector('#yes');
const buttons = document.querySelector('.buttons');
const signUp = document.querySelector('.signUp');
const loveCats = document.querySelector('.loveCats');
const myForm = document.forms.myForm;

const enableSignUp = () => {
  let id = event.target.getAttribute('id');
  if (id === 'dog' || id === 'cat') {
    signUp.removeAttribute('disabled');
  } else {
    signUp.setAttribute('disabled', '');
  }
}

const enableLoveCats = () => {
  let id = event.target.getAttribute('id');
  if (id === 'yes') {
    loveCats.removeAttribute('disabled');
  } else {
    loveCats.setAttribute('disabled', '');
  }
}

const chooseViktor = () => {
  if (nope.checked && favFish.checked) {
    signUp.removeAttribute('disabled');
  }
}

favPets.addEventListener('click', enableSignUp);
catFacts.addEventListener('click', enableLoveCats);
myForm.addEventListener('click', chooseViktor);

buttons.addEventListener('click', () => {
  if (!yep.checked && !nope.checked) {
    alert('Please choose an answer to the second question!');
  } else if (yep.checked) {
    alert('Thank you, you\'ve successfully signed up for cat facts!');
  } else if (nope.checked) {
    alert('You won\'t get any newsletter from us!');
  } else if (nope.checked && favFish.checked) {
    alert('Sigh, we still added you to the cat facts list!');
  }
});