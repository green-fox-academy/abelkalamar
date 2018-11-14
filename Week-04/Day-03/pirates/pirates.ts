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
      console.log(`Arghh, I'ma Pirate. How d'ya d'ink its goin?\n (He passed of, but he will sleep it off.)`);
    }
  }

  die(): void {
    this.alive = false;
  }

  brawl(opp: Pirates): void {
    let result = Math.ceil(Math.random() * 3);
    if (opp.alive) {
      switch (result) {
        case 1: opp.alive = false;
        console.log(`The winner is ${this.name}.`)
        break;
        case 2: this.alive = false;
        console.log(`The winner is ${opp.name}.`)
        break;
        case 3: console.log('They passed out and will sleep it off.');
        break;
      }
    }
  }
}