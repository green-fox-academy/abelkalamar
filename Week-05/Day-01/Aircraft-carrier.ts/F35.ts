import Aircraft from "./aircraft";

export default class F35 extends Aircraft {

  constructor() {
    super();
    this.maxAmmo = 12;
    this.baseDamage = 50;
  }
}
