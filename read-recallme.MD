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
