'use strict'
export { };

class Animals {

  hunger: number;
  thirst: number;

  constructor(hunger: number = 50, thirst: number = 50) {
    this.hunger = hunger;
    this.thirst = thirst;
  }

  eat() {
    this.hunger--;
  }

  drink() {
    this.thirst--;
  }

  play() {
    this.hunger++;
    this.thirst++;
  }
}

let tiger = new Animals(60);

tiger.play();

console.log(tiger.hunger);
console.log(tiger.thirst);