// Inheritance 
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

let d = new Animal("Rex");
d.speak();