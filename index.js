// constructor
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

