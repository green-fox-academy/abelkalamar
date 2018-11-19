export default class Plant {

  color: string;
  currWaterAmount: number;
  waterAbsorbtion: number;

  constructor(color: string) {
    this.color = color;
    this.currWaterAmount = 0;
  }

  doesItNeedWater() {
    if(this.currWaterAmount < 5) return true;
  }
}