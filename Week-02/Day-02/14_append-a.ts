"use stricts"

// -  Create an array variable named `animals`
//    with the following content: `["koal", "pand", "zebr"]`
// -  Add all elements an `"a"` at the end

let animals: string[] = ["koal", "pand", "zebr"];

let aanimals = animals.map(function(e){
    return e += "a";

})

console.log(aanimals);