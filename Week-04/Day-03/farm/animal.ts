'use strict'

export class Animals {

  species: string;
  hunger: number;
  thirst: number;

  constructor(species: string, hunger: number = 50, thirst: number = 50) {
    this.species = species;
    this.hunger = hunger;
    this.thirst = thirst;
  }

  eat(): void {
    this.hunger--;
  }

  drink(): void {
    this.thirst--;
  }

  play(): void {
    this.hunger++;
    this.thirst++;
  }
}
