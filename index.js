// Primitives Testing Java Script Array

//Testing is it Odd or Even 

const numbers = [1, 2, 3, 4, 5];

// two type of method (every() , some())

let isEven = numbers.every(function (value){

    return value % 2 === 0;
});
console.log("isEven:", isEven);

let isOdd = numbers.some(function (value) {
    return value % 2 === 1;
});
console.log("isOdd:" , isOdd);
