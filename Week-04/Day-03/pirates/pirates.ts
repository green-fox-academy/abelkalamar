export class Pirates {

  name: string;
  drunkLevel: number = 0;
  health: number;
  alive: boolean;
  
  constructor(name: string, health: number = 10) {
    this.name = name;
    this.health = health;
    this.alive = true;
  }

  drinkSomeRum(): void {
    if (this.drunkLevel < 4) this.drunkLevel++;
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
}