import { Sharpie } from "./sharpie";

export class SharpieSet {

  name: string;
  sharpies: Sharpie[];

  constructor(name: string) {
    this.name = name;
    this.sharpies = [];
  }

  add(elem: Sharpie): void {
    this.sharpies.push(elem);
  }

  countUsable(name: Sharpie): boolean {return name.inkAmount !== 0}

  removeTrash(): void {
    this.sharpies.forEach((e, i, a) => {
      if (e.inkAmount === 0) {
        a.splice(i, 1);
      }    
    });
  }
}
