import { Thing } from "./thing";
import { Fleet } from "./fleet";

let fleet = new Fleet();

/* Crete a fleet of things to have this output:
1. [ ] Get milk
2. [ ] Remove the obstacles
3. [x] Stand up
4. [x] Eat lunch
// Hint: You have to create a `print()` method as well */

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

fleet.print();

//console.log(fleet);
