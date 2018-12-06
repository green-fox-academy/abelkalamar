// Turn the party on and off by clicking the button. (the whole page)

const button = document.querySelector('button');
const party = document.querySelector('div');
console.log(party.classList.contains(party))

button.onclick = () => {
  if (party.className === 'party') {
    party.setAttribute('class', 'nothing');
  } else {
    party.setAttribute('class', 'party');
  }
}
