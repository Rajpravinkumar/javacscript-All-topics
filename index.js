// constructor funcation / class function
/* function Person(name) {
  this.name = name;
  this.greerting = function () {
    console.log(`My name is ${name}`);
  };
}
let person = new Person("anbu");
person.greerting(); */

class Person {
    constructor(name) {
        this.name = name;
        this.greerting = function () {
            console.log(`My name is ${name}`);

        };
    }
}
let person = new Person("anbu");
person.greerting()