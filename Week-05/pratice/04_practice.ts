import fs from 'fs';

let content = fs.readFileSync('objectContent.txt', 'utf8').trim().split('\r\n');
let contentLines = content.map(e => { return e.split('  ') });
let climbers = contentLines.reduce((elems, lines): Object => {
  elems[lines[0]] = elems[lines[0]] || []
  elems[lines[0]].push({
    type: lines[1],
    grade: lines[2]
  })
  return elems;
}, {})

// console.log(climbers);

// make a list of all of the grades 

let nameOfClimbers: string[] = [];
let climbingTypes: string[] = [];
let climbingGrades: string[] = [];
for (let i in climbers) {
  nameOfClimbers.push(i);
  climbingTypes.push(climbers[i][0].type);
  climbingGrades.push(climbers[i][0].grade);
}

console.log(nameOfClimbers);
console.log(climbingTypes);
console.log(climbingGrades);

for (let i of climbingGrades) {
  console.log(i);
}
