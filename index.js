// Javascript Arrays Interview
// -> 3) Empty this array:
var array = [1, 2, 3, 4, 5];
//method 1
array = [];

//method 2
array.length = 0;
 //method 3
while (array.length) {
  array.pop();
}

//method 4 
array.splice(0, array.length);

console.log(array);
