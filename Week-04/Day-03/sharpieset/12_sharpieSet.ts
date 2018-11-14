import { Sharpie } from "./sharpie";
import { SharpieSet } from "./sharpieSet";

let sharpieCase = new SharpieSet('sharpieCase');

let blue = new Sharpie('blue', 10, 50);
let green = new Sharpie('green', 20, 150);
let red = new Sharpie('red', 10);
let yellow = new Sharpie('yellow', 30, 130);

sharpieCase.add(blue);
sharpieCase.add(green);
sharpieCase.add(red);
sharpieCase.add(yellow);

//console.log(sharpieCase);

blue.use(50);
console.log(sharpieCase.countUsable(blue));


