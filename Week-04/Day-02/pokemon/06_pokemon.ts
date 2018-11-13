import { Pokemon } from './Pokemon'

let pokemonOfAsh: Pokemon[] = initializePokemon();

// Every pokemon has a name and a type.
// Certain types are effective against others, e.g. water is effective against fire.

// Ash has a few pokemon.
// A wild pokemon appeared!

let wildPokemon: Pokemon = new Pokemon('Oddish', 'leaf', 'water');

// Which pokemon should Ash use?

function initializePokemon(): Pokemon[] {
  return [
    new Pokemon('Balbasaur', 'leaf', 'water'),
    new Pokemon('Pikatchu', 'electric', 'water'),
    new Pokemon('Charizard', 'fire', 'leaf'),
    new Pokemon('Blastoise', 'water', 'fire'),
    new Pokemon('Kingler', 'water', 'fire')
  ];
}
// 1st soluion
function pickPokemon(): string {
  let bestPok: string = '';
  for (let i: number = 0; i < pokemonOfAsh.length; i++) {
    if (pokemonOfAsh[i].effectiveAgainst === wildPokemon.type) {
      bestPok = pokemonOfAsh[i].name;
    }
  }
  return bestPok;
}
console.log(`I choose you, ${pickPokemon()}`);

// 2nd solution
function pickRightPokemon(): string {
  let bestPok: string = '';
  for (let i: number = 0; i < pokemonOfAsh.length; i++) {
    if (pokemonOfAsh[i].isEffectiveAgainst(wildPokemon)) {
      bestPok = pokemonOfAsh[i].name;
    }
  }
  return bestPok;
}
console.log(`I choose you, ${pickRightPokemon()}`);
