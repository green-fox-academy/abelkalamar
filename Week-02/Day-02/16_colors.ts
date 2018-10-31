'use strict'
export { };

// -  Create a two dimensional list
//    which can contain the different shades of specified colors
// -  In `colors[0]` store the shades of green:
//    `"lime", "forest green", "olive", "pale green", "spring green"`
// -  In `colors[1]` store the shades of red:
//    `"orange red", "red", "tomato"`
// -  In `colors[2]` store the shades of pink:
//    `"orchid", "violet", "pink", "hot pink"`

// NOT WORKING PROPERLY YET NEED TO WORK ON THE CODE

let colors = []
let size: number = 3;

let greens: string[] = ["lime", "forest green", "olive"];
let oranges: string[] = ["orange red", "red", "tomato"];
let pinks: string[] = ["orchid", "violet", "pink"];

for (let i: number = 0; i < size; i++) {
  colors.push([]);
  colors[i].push([]);
  for (let j: number = 0; j < size; j++) {
    if (i === 0) {
      colors[i][j] = greens[i];
    } else if (i === 1) {
      colors[i][j] = oranges[i];
    } else if (i === 2) {
      colors[i][j] = pinks[i];
    }
  }
}

console.log(colors);
