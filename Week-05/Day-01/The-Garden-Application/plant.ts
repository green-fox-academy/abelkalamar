export default class Plant {

  protected color: string;
  protected currWaterAmount: number;
  protected waterAbsorbtion: number;

  constructor(color: string) {
    this.color = color;
    this.currWaterAmount = 0;
  }

  getColor() {
    return this.color;
  }

  getWaterAbsorbtion() {
    return this.waterAbsorbtion;
  }

  setWaterAmount(waterAmount: number) {
    return this.currWaterAmount += waterAmount;
  }

  doesItNeedWater() {
    return this.currWaterAmount < 5;
  }
}
