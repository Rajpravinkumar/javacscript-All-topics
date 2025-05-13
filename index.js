// Javascript Arrays Interview
// -> 2) Take the below array and copy it using the slice method and the for loop method.

var array = [1, 2, 3, 4, 5];
//slice
let result = array.slice();
console.log(result);

// for lop method

let tempArray = [];
for (let i = 0; i < array.length; i++) {
    tempArray[i] = array[i];
}

console.log(tempArray);

// spread operators 

let spread = [...array]
console.log(spread);

