import FileIo from './file-io';
import Car from './car';
import CarPark from './carPark';

let myCarPark = new CarPark();

// let objectOfCars = splittedContent.reduce((keys, data) => {
//   keys[data[1]] = data[0];
//   return keys;
// }, {});


function getObject(fileName: string): string {
  let content = FileIo.readFile(fileName);
  let cars: Car[] = [];
  if (content !== null) {
    let splittedContent = content.split('\r\n').map(e => e.split(','));
    splittedContent.forEach((e, i) => {
      cars.push(new Car(i + 1, e[0], +e[1], +e[2]))
    });
    cars.sort((a, b) => a.getManufactureYear() - b.getManufactureYear());
    return cars[0].getLicensePlate();
  }
}

console.log(getObject('car.csv'));


// const myObj: any = {};
// myObj.str = 'myString';
// myObj.number = 42;
// myObj.array = [1, 2];

// console.log('Expected myString :::', myObj.str);

// console.log('Expected 42 :::', myObj['number']);

// const example = 'array';
// console.log('Expected [ 1, 2 ] :::', myObj[example]);

// console.log('Expected undefined :::', myObj['']);

// console.log('\nUsing [] property accessor to dynamically get data from an object');

// const propertyNames = ['a', 'b', 'c'];

// const object = { a: 'First property', b: 'Second property', c: 'Third property' };

// propertyNames.forEach((propertyName: string) => {
//   console.log(object[propertyName]);
// });