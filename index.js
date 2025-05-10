// Emptying an javaScript Array 

let  numbers = [1, 2, 3, 4,];

let another_numbers = numbers;
//solution 1 
numbers = [];

//solution 2 
numbers.length = 0;

//solution 3 
numbers.splice(0, numbers.length);

//solution 4 
while (numbers.length) numbers.pop();

console.log(numbers);
