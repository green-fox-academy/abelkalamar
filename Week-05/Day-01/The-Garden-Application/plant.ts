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

  getWaterAmount() {
    return this.currWaterAmount;
  }

  getWaterAbsorbtion() {
    return this.waterAbsorbtion;
  }

  setWaterAmount(waterAmount: number) {
    return this.currWaterAmount += waterAmount;
  }

  doesItNeedWater() {
    if (this.currWaterAmount < 5) return true;
  }
}