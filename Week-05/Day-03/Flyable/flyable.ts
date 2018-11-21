interface Flyable {

  land();
  fly();
  takeOff();

}

abstract class Vehicle {

  name: string;
  numOfWheels: number;
  engineType: string;

  constructor(name: string) {
    this.name = name;
    this.numOfWheels = 4;
  }
}

class Helicopter extends Vehicle implements Flyable{

  constructor(numOfWheels: number) {
    super(name);
    this.numOfWheels = numOfWheels;
  }

  land() {

  };

  fly() {

  };

  takeOff() {
    
  };
}