import Plant from './plant';

export default class Flower extends Plant {

  constructor(color: string) {
    super(color);
    this.waterAbsorbtion = 0.75;
  }

  doesItNeedWater() {
    return super.doesItNeedWater();
  }
}
