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

