import { Farm } from "./farm";
import { Animals } from "./animal";

let farmAfrica = new Farm('farmAfrica', 7);

farmAfrica.breed(new Animals('tiger', 100, 100));
farmAfrica.breed(new Animals('zebra', 50, 150));
farmAfrica.breed(new Animals('lion', 100, 100));
farmAfrica.breed(new Animals('elephant', 20, 300));
farmAfrica.breed(new Animals('giraffe', 80, 120));
farmAfrica.breed(new Animals('crocodile', 100, 100));
farmAfrica.breed(new Animals('giantSnake', 140, 150));

console.log(farmAfrica);

farmAfrica.slaughter();

console.log(farmAfrica);