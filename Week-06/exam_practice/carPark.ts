import Car from './car';
import FileIo from './file-io';

export default class CarPark {

  private carPark: Car[] = [];

  addCar(car: Car): void {
    this.carPark.push(car);
  }

  addCarToFile(fileName: string, car: Car): void {
    FileIo.appendFile(fileName, `${car.getLicensePlate},${car.getManufactureYear},${car.getHasTicket}`)
  }

  removeCar(id: number): void {
    this.carPark.forEach((e, i) => {
      if (e.getId() === id) {
        this.carPark.splice(i, 1);
      }
    });
  }

  getPenalty(fileName): string[] {
    let content = FileIo.readFile(fileName).split('\r\n');
    let carsWithNoTicket: string[] = [];
    if (content !== null) {
      content.forEach(e => {
        if (+(e.split(',')[2]) === 0) {
          carsWithNoTicket.push(e.split(',')[0]);
        }
      });
    } else {
      console.log('Cannot read file!');
    }
    return carsWithNoTicket;
  }

  getOldest(fileName): string {
    let content = FileIo.readFile(fileName).split('\r\n');
    let oldestCar: string = '';
    if (content !== null) {
      let splittedContent = content.map(e => e.split(','));
      let manufactureYears = [];
      splittedContent.forEach(e => {
        manufactureYears.push(e[1]);
      })
      splittedContent.forEach(e => {
        if (parseInt(e[1]) === Math.min(...manufactureYears)) {
          oldestCar = e[0];
        }
      }) 
    } else {
      console.log('Cannot read file!');
    }
    return oldestCar;
  }
}
