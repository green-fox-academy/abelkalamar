import { Animals } from './animal';

export class Farm {

  name: string;
  private animals: Animals[] = [];
  freeSlots: number;

  constructor(name: string, capacity: number) {
    this.name = name;
    this.freeSlots = capacity;
  }

  breed(animal: Animals) {
    if (this.freeSlots !== 0) {
      this.animals.push(animal);
      this.freeSlots--;
    } else {
      console.log(`Not enough space for ${animal}`);
    }
  }

  getAnimals() {
    return this.animals;
  }

  slaughter() {
    let minHunger = 1000;
    let index: number = 0;
    this.animals.forEach((e, i, a) => {
      if (e.hunger < minHunger) {
        minHunger = e.hunger;
        index = i;
      }
      return index;
    })
    this.animals.splice(index, 1);
    this.freeSlots++;
  }
}
