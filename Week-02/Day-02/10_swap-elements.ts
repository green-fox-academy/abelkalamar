
// -  Create a variable named `abc` with the following content: `["Arthur", "Boe", "Chloe"]`
// -  Swap the first and the third element of `abc`

let abc: string[] = ["Arthur", "Boe", "Chloe"];

function swap(array: string[]){
    let copyArray: string[] = array;
    array.splice(0, 3, copyArray[2], copyArray[1], copyArray[0]);
    return array;
}

console.log(swap(abc));
