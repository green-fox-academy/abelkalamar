import FileIo from './file-io';

export class Car {

    private id: number;
    private licensePlate: string;
    private manufactureYear: number;

    constructor(id: number, licensePlate: string, manufactureYear: number) {
      this.id = id;
      this. licensePlate = licensePlate;
      this.manufactureYear = manufactureYear;
    }
}