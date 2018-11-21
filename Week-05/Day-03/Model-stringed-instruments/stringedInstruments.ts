import Instrument from "./instrument";

abstract class StringedInstrument extends Instrument {

  numberOfStrings: number;

  constructor() {
    super();
  }

  sound() {
  };

  play(): void {
    console.log(`${this.name}, a ${this.numberOfStrings}-stringed istrument that goes ${this.sound()}.`);
  }
}

export class ElectricGuitar extends StringedInstrument {

  constructor(numberOfStrings: number = 6) {
    super();
    this.numberOfStrings = numberOfStrings;
    this.name = 'Electric Guitar';
  }

  sound(): string {
    return 'Twaag';
  }
}

export class BassGuitar extends StringedInstrument {

  constructor(numberOfStrings: number = 4) {
    super();
    this.numberOfStrings = numberOfStrings;
    this.name = 'Bass Guitar';
  }

  sound(): string {
    return 'Duum-duum-duum';
  }
}

export class Violin extends StringedInstrument {

  constructor(numberOfStrings: number = 4) {
    super();
    this.numberOfStrings = numberOfStrings;
    this.name = 'Violin';
  }

  sound(): string {
    return 'Screech';
  }
}
