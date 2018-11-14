'use strict'


export class Sharpie {

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


