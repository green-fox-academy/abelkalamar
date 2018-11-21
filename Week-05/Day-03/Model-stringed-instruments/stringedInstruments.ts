abstract class StringedInstrument extends Instrument {

  numberOfStrings: number;

  constructor() {
    super(name);
  }

  sound() {

  };
}

class ElectricGuitar extends StringedInstrument {

  constructor() {
    super();
    this.numberOfStrings = 6;
  }

  sound() {
    console.log('Twaag');
  }
}

class BassGuitar extends StringedInstrument {

  constructor() {
    super();
    this.numberOfStrings = 4;
  }

  sound() {
    console.log('Duum-duum-duum');
  }
}

class Violin extends StringedInstrument {

  constructor() {
    super();
    this.numberOfStrings = 4;
  }

  sound() {
    console.log('Screech');
  }
}