// -  Create a function called `factorio`
//    that returns it's input's factorial

function factorio(num: number) {
    let factNum: number = 1;
    for (let i: number = 1; i <= num; i ++){
        factNum *= i;
    }

    return factNum;
}

console.log(factorio(10));