import Flower from "./flower";
import Tree from "./tree";

class Garden {

  name: string;
  plants: Flower[] | Tree[];

  constructor(name: string) {
    this.name = name;
    this.plants = [];
  }

  

}