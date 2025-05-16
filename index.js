//String object represent and manipulate a sequence of character , strings can be primitive or objects , but js automatically convert between them when needed

let str = "Hello World"; //string

let strObj = new String("Hello World!") //object

let message = "Hello , JavaScript";

//length 
message.length; // 18

//Access Characters
message.charAt(0);
message[0];

// Case conversion
message.toUpperCase();
message.toLowerCase();
//search 
message.indexOf("java")
message.includes("Java");
//Extraxt substrings
message.slice(7, 12);
message.substring(7, 12);

//Replace
message.replace("JavaScript", "JS!")

//split 
message.split(" , ");

//Trim WhiteSpace 
let name = "   John Doe  "
let trimmed = name.trim();
console.log(trimmed);
console.log(name.length); //13
console.log(trimmed.length); // 8


//Strinh Object Vs Primitive

let primitive = "abc"; //string
let non_primitive = new String("abc"); //object

console.log(primitive === non_primitive); //false
console.log(primitive == non_primitive); //true



