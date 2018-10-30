// -  Create a function called `printParams`
//    which logs to the console the input parameters
//    (can have multiple number of arguments)

function printParams(...nums: number[]){
    console.log(nums);
}

printParams(56, 77, 888,34, 54);