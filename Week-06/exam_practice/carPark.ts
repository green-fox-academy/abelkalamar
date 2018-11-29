import Car from './car';
import FileIo from './file-io';

class CarPark {

  private carPark: Car[] = [];

  addCar(car: Car) {
    this.carPark.push(car);
  }

  addCarToFile(fileName: string, car: Car) {
    FileIo.appendFile(fileName, `${car.getLicensePlate}`)
  }

}