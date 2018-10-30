// -  Write a function called `sum` that sum all the numbers until the given parameter
// -  The function should return the result

function sum(num){
    let number: number = 0;
    for (let i: number = 0; i <= num; i ++){
        number += i;
    }

    return number;
}

console.log(sum(20));
