import F16 from "./F16";
import F35 from "./F35";

export default class Carrier {

  private name: string;
  private healthPoints: number;
  private planes: F16[] | F35[];
  private ammoStore: number;
  private totalDamage: number;

  constructor(ammo: number, health: number) {
    this.ammoStore = ammo;
    this.healthPoints = health;
    this.planes = [];
    this.totalDamage = 0;
  }

  add(plane: F16 | F35, num: number): void {
    for (let i = 0; i < Math.random() * num; i++) {
      this.planes.push(plane);
    }
  }

  fill(): void {
    let requiredAmmo = 0;
    if (this.ammoStore === 0) {
      throw console.log('No ammo in the store!');
    } else {
      this.planes.forEach(e => {
        return requiredAmmo += e.getMaxAmmo();
      });
      if (requiredAmmo < this.ammoStore) {
        this.planes.forEach(e => {
          this.ammoStore = e.refill(this.ammoStore);
        });
      } else {
        this.planes.forEach(e => {
          if (e.isPriority()) {
            this.ammoStore = e.refill(this.ammoStore);
          }
        });
        this.planes.forEach(e => {
          if (!e.isPriority()) {
            this.ammoStore = e.refill(this.ammoStore);
          }
        });
      }
    }
    console.log(this.ammoStore);
  }

  fight(carrier: Carrier): number {
    this.planes.forEach(e => {
      this.totalDamage += e.getCurrDamage();
    });
    return carrier.healthPoints -= this.totalDamage;
  }

  getStatus(): void {
    if (this.healthPoints < 0) {
      console.log('It\'s dead Jim :(');
    } else {
      console.log(`HP: ${this.healthPoints}, Aircraft count: ${this.planes.length}, Ammo Storage: ${this.ammoStore}, Total Damage: ${this.totalDamage}`);
      console.log(`Aircrafts:`);
      this.planes.forEach(e => {
        console.log(`Type ${e.getType()}, Ammo: ${e.getCurrAmmo()}, Base Damage: ${e.getBaseDamage()}, All Damage: ${e.getCurrDamage()}`);
      });
    }
  }
}
