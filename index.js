// java Script Object & OOP 
//(Object Oriented Programming)

let person = {
    name: "raj",
    age: 24,
    sex: "male",
    interest: ['Creating , teaching new things.'],
    isAlive: true,
    address: {
        city: "chennai",
        state: "TamilNadu"
    },
    greeting: function(){
        let msg = `my Name is ${this.name}, I love ${this.interest}`;
        console.log(msg)
    }
    
    
}
person.greeting();