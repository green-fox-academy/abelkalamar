import { Students } from './students';
import { Teacher } from "./teacher";

let peti = new Students('Peti', 18);
let zsolti = new Students('Zsolti', 19);
let jani = new Students('Jani', 20);
let jocó = new Students('Jocó', 24);

let anett = new Teacher('Anett', 45);

console.log('Peti\'s knowledge: ', peti.knowledge);
console.log('Anett\'s energy: ', anett.energy);

anett.teach(peti);
zsolti.question(anett);

console.log('Peti\'s knowledge: ', peti.knowledge);
console.log('Anett\'s energy: ', anett.energy);


