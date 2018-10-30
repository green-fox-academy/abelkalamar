// -  Create a variable named `integers` with the following content: `[4, 5, 6, 7]`
// -  Log each the element of `integers` to the console*
// *hint: use a loop, console.log(integers) won't cut it
// -  bonus for using the correct built in array method

let integers: number[] = [4, 5, 6, 7];

function printAll(array: number[]){
    for (let i: number = 0; i < array.length; i ++){
        console.log(array[i]);
    }
    
}

printAll(integers);