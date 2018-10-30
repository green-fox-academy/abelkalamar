// -  Create a variable named `numList` with the following content: `[1, 2, 3, 4, 5]`
// -  Increment the third element simply by accessing it
// -  Log the third element to the console

let numList: number[] = [1, 2, 3, 4, 5];

let newList = numList.map(function(e){
    if (e == 3){
        return e += 1;
    } else return e;

})

console.log(newList[2]);

