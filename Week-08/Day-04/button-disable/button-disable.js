const favPets = document.querySelector('.firstQuestion div');
const catFacts = document.querySelector('.secondQuestion div');

console.log(favPets);

console.log(favCat);


const enableSignUp = (event) => {
  const signUp = document.querySelector('.signUp');
  let id = event.target.getAttribute('id');
  if (id === 'dog' || id === 'cat') {
    signUp.removeAttribute('disabled');
  } else {
    signUp.setAttribute('disabled', '');
  }
}

const enableLoveCats = () => {
  const loveCats = document.querySelector('.loveCats');
}

favPets.addEventListener('click', enableSignUp);

catFacts.addEventListener('click', enableLoveCats);