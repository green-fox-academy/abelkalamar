export class Pirates {

  name: string;
  drunkLevel: number;
  alive: boolean;
  
  constructor(name: string) {
    this.name = name;
    this.alive = true;
    this.drunkLevel = 0;
  }

  drinkSomeRum(): void {
    if (!this.alive) return console.log('He is dead.');
    else if (this.drunkLevel < 4) this.drunkLevel++;
  } 

  howItsGoingMate(): void {
    if (this.drunkLevel < 4) {
      console.log('Pour me anudder!')
      this.drinkSomeRum();
    } else {
      console.log("Arghh, I'ma Pirate. How d'ya d'ink its goin?");
    }
  }

  die(): void {
    this.alive = false;
  }

  brawl(opp: Pirates): void {
    let result = Math.ceil(Math.random() * 3);
    if (opp.alive) {
      switch (result) {
        case 1: this.alive = false;
        console.log(`The winner is ${this.name}`)
        case 2: opp.alive = false;
        console.log(`The winner is ${opp.name}`)
        case 3: console.log('They passed out and will sleep it off.');
        break;
      }
    }
  }
}