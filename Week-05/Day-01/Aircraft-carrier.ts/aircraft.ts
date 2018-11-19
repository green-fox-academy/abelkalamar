export default class Aircraft {

  protected name: string;
  protected maxAmmo: number;
  protected baseDamage: number;
  protected currAmmo: number;

  constructor(name: string) {
    this.name = name;
    this.currAmmo = 0;
  }

  setAmmo(ammo: number) {
    this.currAmmo += ammo;
  }

  getCurrAmmo() {
    return this.currAmmo;
  }

  getMaxAmmo() {
    return this.maxAmmo;
  }

  fight() {
    let damage = this.baseDamage * this.currAmmo;
    this.currAmmo = 0;
    return damage;
  }

  refill(ammo: number) {
    if (ammo > this.currAmmo) {
      this.currAmmo = this.maxAmmo;
    } else {
      this.currAmmo = ammo;
    }
    return ammo - this.currAmmo;
  }

  getType() {
    return this.constructor.name;
  }

  getStatus() {
    console.log(`Type ${this.constructor.name}, Ammo: ${this.currAmmo}, Base Damage: ${this.baseDamage}, All Damage: ${this.currAmmo * this.baseDamage}`);
  }

  isPriority() {
    if (this.getType() === 'F16') {
      return false;
    } else {
      return true;
    }
  }
}
