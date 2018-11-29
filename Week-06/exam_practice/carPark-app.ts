import Car from './car';
import CarPark from './carPark';

let myCarPark = new CarPark();

let opel = myCarPark.addCar(new Car(1, 'ABC-224', 1993, 1));
let tesla = myCarPark.addCar(new Car(2, 'NOD-199', 2011, 1));
let ford = myCarPark.addCar(new Car(3, 'ABC-583', 1989, 1));

console.log(myCarPark.getOldest('car.csv'));

console.log(myCarPark.getPenalty('car.csv'));