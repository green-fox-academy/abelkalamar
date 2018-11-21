import Instrument from "./instrument";

abstract class StringedInstrument extends Instrument {

  numberOfStrings: number;

  constructor() {
    super();
  }

  sound() {
  };
}

export class ElectricGuitar extends StringedInstrument {

  constructor(numberOfStrings: number = 6) {
    super();
    this.numberOfStrings = numberOfStrings;
  }

  sound(): string {
    return 'Twaag';
  }

  play(): void {
    console.log(`Electric Guitar, a ${this.numberOfStrings}-stringed istrument that goes ${this.sound()}.`);
  }
}

export class BassGuitar extends StringedInstrument {

  constructor(numberOfStrings: number = 4) {
    super();
    this.numberOfStrings = numberOfStrings;
  }

  sound(): string {
    return 'Duum-duum-duum';
  }

  play(): void {
    console.log(`Bass Guitar, a ${this.numberOfStrings}-stringed istrument that goes ${this.sound()}.`);
  }
}

export class Violin extends StringedInstrument {

  constructor(numberOfStrings: number = 4) {
    super();
    this.numberOfStrings = numberOfStrings;
  }

  sound(): string {
    return 'Screech';
  }

  play(): void {
    console.log(`${this.constructor.name}, a ${this.numberOfStrings}-stringed istrument that goes ${this.sound()}.`);
  }
}
