abstract class StringedInstrument extends Instrument {

  constructor() {

  }

  numberOfStrings: number;
  sound() {

  };
}

class ElectricGuitar extends StringedInstrument {

  constructor(numOfStrings: number) {
    super(this.numberOfStrings);
    this.numberOfStrings = 6;
  }

  sound() {
    console.log('Twaag');
  }
}

class BassGuitar extends StringedInstrument {


  sound() {
    console.log('Twaag');
  }
}

class Violin extends StringedInstrument {

}