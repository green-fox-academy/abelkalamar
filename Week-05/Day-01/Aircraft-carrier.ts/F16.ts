import Aircraft from "./aircraft";

export default class F16 extends Aircraft {

  constructor() {
    super();
    this.maxAmmo = 8;
    this.baseDamage = 30;
  }
}
