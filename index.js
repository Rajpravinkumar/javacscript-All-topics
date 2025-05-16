 //Cloning Arrays 
let fruits = ["apple", "Orange"];
let clone = [...fruits];

console.log(clone);
//Cloning Objects 

let person = { name: "Alice", age: 25 };
let clone1 = { ...person };
clone1.age = 30;
console.log(clone1);

//Merging Objects

let contact = { emial: "a@example.com" };
let fullInfo = { ...person, ...contact }
console.log(fullInfo);
 
//Shallow copy Warning 

let obj = {
    name: "Anbu",
    address: {
        city: "New York"
    }
    
};

let clone2 = { ...obj };
clone2.address.city = "London";
console.log(obj.address.city);

let str = "Hello"
let charArray = [...str]

console.log(charArray.reverse());
