import Garden from './garden';
import Flower from './flower';
import Tree from './tree';

let myGarden = new Garden('Füvészkert');

myGarden.addPlants(new Flower('blue'));
myGarden.addPlants(new Flower('yellow'));
myGarden.addPlants(new Tree('orange'));
myGarden.addPlants(new Tree('purple'));


myGarden.info();
myGarden.watering(40);
myGarden.watering(70);
