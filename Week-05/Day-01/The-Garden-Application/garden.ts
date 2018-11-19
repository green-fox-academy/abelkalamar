import Flower from "./flower";
import Tree from "./tree";

export default class Garden {

  name: string;
  plants: Flower[] | Tree[];

  constructor(name: string) {
    this.name = name;
    this.plants = [];
  }

  info() {
    console.log(`In ${this.name} garden are ${this.plants.length} plants:`)
    this.plants.forEach(e => {
      if (e.doesItNeedWater()) {
        console.log(`The ${e.getColor()} ${this.plantType(e)} needs water.`);
      } else {
        console.log(`The ${e.getColor()} ${this.plantType(e)} doesn't need water.`);
      }
    });
    console.log(``);
  }

  addPlants(plant: Flower | Tree) {
    this.plants.push(plant);
  }

  plantType(plant: Flower | Tree) {
    if (plant instanceof Flower) {
      return 'Flower';
    } else {
      return 'Tree';
    }
  }

  watering(waterAmount: number) {
    let numOfThirstyPlants = 0;
    this.plants.forEach(e => {
      if (e.doesItNeedWater) {
        numOfThirstyPlants++;
      }
    });
    console.log(`Watering with ${waterAmount}`)
    this.plants.forEach(e => {
      e.setWaterAmount(e.getWaterAbsorbtion() * (waterAmount / numOfThirstyPlants));
      if (e.doesItNeedWater()) {
        console.log(`The ${e.getColor()} ${this.plantType(e)} needs water.`);
      } else {
        console.log(`The ${e.getColor()} ${this.plantType(e)} doesn't need water.`)
      }
    });
    console.log(``);
  }
}
