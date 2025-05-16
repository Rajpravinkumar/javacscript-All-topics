# Dynamic Objects
let person = {};

// add properties dynamically
person.name = "Alice";
person.age = 20;

let key = "email";
person[key] = "alice@gmail.com"
//Add a Method
person.greet = function () {
  console.log(`Hi, I'm ${this.name} ,My email is  ${this.email}`);
};
delete person.age;
//console.log(person);
person.greet();

for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}

//Example with Dynamic keys 
function createDynamicObject(key, value) {
    return {
        [key]: value

    };

}

let obj = createDynamicObject("Score", 100);
console.log(obj);

###  factory method 
const userMethods = {
    greet() {
        console.log(`Hi, I'm ${this.name}`);
        
    }
}

function createUser(name) {
    const user = Object.create(userMethods);
    user.name = name;
    return user;
}

const u1 = createUser("anbu");
u1.greet();
const u2 = createUser("anu")
u2.greet()

# Inheritance 
class Animal {
    constructor(name) {
        this.name = name;
    
    }


    speak() {
        console.log(`${this.name} makes a sound`);
    
    }
}

class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks.`);
        
    }
}

# constructor
let name = String("Anbu")
//let name = "Anbu"

console.log(name);

// with classes 
class Animal {
    constructor(type) {
        this.type = type;
    }
}
let a = new Animal("Dog");
console.log(a.constructor === Animal);


// Example 
class Person {
    constructor(name) {
        this.name = name;
    }
}

let p = new Person("Alice");

console.log(p.constructor === Person); 

let p2 = new p.constructor("Bob");
console.log(p2.name);

# Enumerating properties of an Object
const user = {
    name: "anbu",
    getFullName() {
        console.log(`Hi My Name is ${this.name}`);
        
    }
}



for(let key in user){
    console.log(key, user[key]);
    
}

for (let key of Object.keys(user)) {
    console.log(key);
    
}

for (let entry of Object.entries(user)) {
    console.log(entry);
    
} 

if ("name" in user) {
    console.log("Yes!");
    
}

 # Cloning Arrays 
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
let charArray = [...str];

console.log(charArray.reverse());

# Math Objets & properties 
let x = 7;
let y = 2;
let math = Math.abs(x);
console.log(math);

//Random interger Between Two Values

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1 )) ;
}
console.log(getRandomInt(1,10));

// Math Object in js provides built-in mathematical constant & function - No need to create a new instance ('Its static)

/* 1. 
Common Math Properties
Property | 	Description	 | Value
Math.PI  |	π (Pi)	|3.14159...
Math.E	Euler's number	2.71828...
Math.LN2	Natural log of 2	0.693...
Math.SQRT2	Square root of 2	1.414... */

/* 2. 
Useful Math Methods

Method	Description	Example
Math.round(x)	Rounds to nearest integer	Math.round(4.7) → 5
Math.floor(x)	Rounds down to nearest integer	Math.floor(4.9) → 4
Math.ceil(x)	Rounds up to nearest integer	Math.ceil(4.1) → 5
Math.trunc(x)	Removes decimal part	Math.trunc(4.9) → 4 */

/*
 Arithmetic & Roots
Method	Description	Example
Math.pow(x, y)	x to the power of y	Math.pow(2, 3) → 8
Math.sqrt(x)	Square root of x	Math.sqrt(16) → 4
Math.abs(x)	Absolute value	Math.abs(-7) → 7 */

/* 
Random & Min/Max
Method	Description	Example
Math.random()	Random number between 0 and 1	Math.random() → 0.28 (example)
Math.min(...x)	Minimum of values	Math.min(3, 1, 4) → 1
Math.max(...x)	Maximum of values	Math.max(3, 1, 4) → 4 */
let x = 7;
let y = 2;
let math = Math.abs(x);
console.log(math);

//Random interger Between Two Values

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1 )) ;
}
console.log(getRandomInt(1,10));
