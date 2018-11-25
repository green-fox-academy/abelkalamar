import fs from 'fs';

let content = fs.readFileSync('objectContent.txt', 'utf8').trim().split('\r\n');
let contentLines = content.map(e => {return e.split('  ')});
let contentObject = contentLines.reduce((elems, lines): Object => {
  elems[lines[0]] = elems[lines[0]] || []
  elems[lines[0]].push({
    type : lines[1],
    grade : lines[2]
  })
  return elems;
}, {})

console.log(contentObject);

// make a list of all of the grades 

