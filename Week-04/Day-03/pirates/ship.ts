import { Pirates } from './pirates';

export class Ship {
  
  name: string;
  captain: Pirates;
  crew: Pirates[] = [];

  constructor(name: string) {
    this.name = name;
  }

  fillShip() {
    let pirateNames = ['Joe', 'Bob', 'Jack', 'Spearrow', 'Barbarossa', 'Hook', 'Parrot', 'Dennis', 'Gregor', 'Daevy Jones'];
    let alivePirates = 0;
    this.captain = new Pirates('Captain Jack');
    for (let i: number = 0; i < Math.ceil(Math.random() * 10); i++) {
      this.crew.push(new Pirates(pirateNames[Math.floor(Math.random() * 10)]))
    }
    console.log(`The captain of this ship is ${this.captain.name}.\nCaptain's drunkLevel is ${this.captain.drunkLevel}.`);
    if (this.captain.alive) { 
      console.log('The captain is alive.');
    } else { 
      console.log('The captain is dead.');
    }
    this.crew.forEach(e => { 
      if (e.alive) alivePirates++;
    })
    console.log(`There are ${alivePirates} pirates on board.`);
  }
}