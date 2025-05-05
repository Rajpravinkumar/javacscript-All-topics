// function are objects

function Person(name, age) {
    this.name = name;
    this.greeting = function () {
        console.log(`My name is ${name}`);
        
    }
}

Person.call({}, "priya", "38")
Person.apply({} , ["pavi", "23"])
let person = new Person("anbu");
