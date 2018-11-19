import Plant from './plant';

export default class Tree extends Plant{

  constructor(color: string) {
    super(color);
    this.waterAbsorbtion = 0.4;
  }

  doesItNeedWater() {
    if(this.currWaterAmount < 10) return true;
  }

}