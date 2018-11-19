import Flower from "./flower";
import Tree from "./tree";

class Garden {

  name: string;
  plants: Flower[] | Tree[];

  constructor(name: string) {
    this.name = name;
    this.plants = [];
    console.log(`In ${this.name} garden are ${this.plants.length} plants.`)
  }

  watering(waterAmount: number) {
    let numOfThirstyPlants = 0;
    this.plants.forEach(e => {
      if (e.doesItNeedWater) {
        numOfThirstyPlants++;
      }
    });
    this.plants.forEach(e => {
      e.setWaterAmount(waterAmount / numOfThirstyPlants);
      if (e.doesItNeedWater) {
      console.log(`The ${e.getColor} ${typeof e} needs water.`);
      } else {
        console.log(`The ${e.getColor} ${typeof e} doesn't need water.`)
      }
    });
  }
  

}