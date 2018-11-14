import { Sharpie } from "./sharpie";

export class SharpieSet {

  name: string;
  sharpies: Sharpie[];

  constructor(name: string) {
    this.name = name;
    this.sharpies = [];
  }

  add(elem: Sharpie) {
    this.sharpies.push(elem);
  }

  countUsable(name: Sharpie) {return name.inkAmount !== 0}

  

}
