export class Car {
  static idCounter: number = 1;

  brand: string;
  id: number;
  gasAmount: number;
  capacity: number;

  constructor(brand: string, capacity: number = 100) {
    this.id = Car.idCounter;
    this.capacity = capacity;
    this.gasAmount = 0;
    Car.idCounter ++;

  }
}