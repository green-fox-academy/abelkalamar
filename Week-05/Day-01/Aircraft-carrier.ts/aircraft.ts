export default class Aircraft {

  protected maxAmmo: number;
  protected baseDamage: number;
  protected currAmmo: number;

  constructor() {
    this.currAmmo = 0;
  }

  setAmmo(ammo: number): void {
    this.currAmmo += ammo;
  }

  getCurrAmmo(): number {
    return this.currAmmo;
  }

  getBaseDamage(): number {
    return this.baseDamage;
  }

  getMaxAmmo(): number {
    return this.maxAmmo;
  }

  getCurrDamage(): number {
    return this.currAmmo * this.baseDamage;
  }

  fight(): number {
    let damage = this.baseDamage * this.currAmmo;
    this.currAmmo = 0;
    return damage;
  }

  refill(ammo: number): number {
    if (ammo > this.currAmmo) {
      this.currAmmo = this.maxAmmo;
    } else {
      this.currAmmo = ammo;
    }
    return ammo - this.currAmmo;
  }

  getType(): string {
    return this.constructor.name;
  }

  getStatus(): void {
    console.log(`Type ${this.getType()}, Ammo: ${this.currAmmo}, Base Damage: ${this.baseDamage}, All Damage: ${this.currAmmo * this.baseDamage}`);
  }

  isPriority(): boolean {
    if (this.getType() === 'F16') {
      return false;
    } else {
      return true;
    }
  }
}
