// JavaScript :
//sort(), find(), vs filter vs map () vs reduce
const numbers = [34, 4, 65, 12, 78];
//sort
/* let result = numbers.sort(); */

//find
/* let result = numbers.find((value) => value > 50 ) */
//filter
/* let result = numbers.filter((value) => value > 50); */
//map
/* let result = numbers.map((value) => {
    return  "#" + value
}) */
//reduce
 let result = numbers.reduce((acc, val ) => {
  return acc + val;
});
 
console.log(result);
