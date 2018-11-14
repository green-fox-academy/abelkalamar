import { Car } from "./gas";
import { Station } from "./station";

let car1 = new Car('audi', 250);
let car2 = new Car('Ford');
let car3 = new Car('Suzuki', 150);

let gasStation = new Station('Shell', 1500);

console.log(car1);
console.log(car2);
console.log(car3);

console.log(gasStation.gasAmount);

gasStation.refill(car1);

console.log(gasStation.gasAmount);
console.log(car1.gasAmount);
