import { Car } from "./gas";

export class Station {

  name: string;
  gasAmount: number;

  constructor (name: string, gasAmount = 500) {
    this.name = name;
    this.gasAmount = gasAmount;
  }

  refill(car: Car) {
    this.gasAmount -= car.capacity;
    car.gasAmount = car.capacity;
  }
}