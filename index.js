// Javascript Arrays Interview
// -> 5) How can you check if something is an Array?



var array = [1, 2, 3, 4, 5];
//method 1 
let obj = [{ id: 1 }];
let other = undefined;
let string = "Anbu";

let result = Array.isArray(obj);
console.log(result);

// method 2 
function checkIfArray(val) {
    if (typeof val == "string") {
         console.log("It is a an string ");
         
    } else if (typeof val == "number") {
        console.log("It is an number");
        
    } else if (typeof val == "undefined") {
        console.log("It is an undefined ");
        
    } else if (typeof val == "object") {
        console.log("It is an object ");
    }
        
    else {
        console.log("It is an array");
        
    }
}
checkIfArray(other);