// String Objects 
let firstName = "Anbu";
let lastName = "selvan";

let firstName2 = new String("Anbu");

console.log(firstName);
console.log(lastName);
//properties 
console.log(firstName.length);

//methods 
console.log(firstName.concat(" ", lastName));
console.log(firstName.includes("bu"));
console.log(firstName.includes("an"));
console.log(firstName.startsWith("an"));
console.log(firstName.startsWith("An"));
console.log(firstName.endsWith("bu"))
console.log(firstName.endsWith("u"));
console.log(firstName.indexOf("b"));
console.log(firstName.repeat(10));
console.log(firstName.replace("Anbu", "Rocky"));
console.log(firstName.slice(2));


let para = "some text";
console.log(para.split(" ", 2));

console.log(para.substring(5));
console.log(firstName.toLowerCase());
console.log(firstName.toUpperCase());

let message = " This is some text you doing good!  ";
console.log(message.trim());
console.log(message.trimStart());
console.log(message.trimEnd());


//Escap Notation 
let hello_message = "This is my Fifth\" message, please replay."







