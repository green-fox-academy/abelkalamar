import { Thing } from "./thing";
import { Fleet } from "./fleet";

let fleet = new Fleet();
let thing1 = new Thing('Get milk');
let thing2 = new Thing('Remove the obstacles');
let thing3 = new Thing('Stand up');
let thing4 = new Thing('Eat lunch');

fleet.add(thing1);
fleet.add(thing2);
fleet.add(thing3);
fleet.add(thing4);

thing3.complete();
thing4.complete();

// fleet.print();

export interface Comparable {
  compareTo(other: Comparable): number;
}

fleet.things.sort(function(a: Thing, b: Thing) {
  return a.compareTo(b);
})

fleet.print();