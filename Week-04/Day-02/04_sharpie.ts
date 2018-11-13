'use strict'
export { };

class Sharpie {

  color: string;
  width: number;
  inkAmount: number;

  constructor(col: string, width: number, inkAmount: number = 100) {
    this.color = col;
    this.width = width;
    this.inkAmount = inkAmount;
  }

  use(value: number): void {
    this.inkAmount -= value;
  }
}

let sharpie1 = new Sharpie('purple', 200);

sharpie1.use(50);
console.log(sharpie1.inkAmount);

