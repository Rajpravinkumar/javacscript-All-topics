// Factory Function 
function createPerson(name) {
    return {
        name,
        greeting() {
            let msg = `my name is ${this.name}`;
            console.log(msg);
        }
    };
}

let anbu = createPerson("anbu");
anbu.greeting();
let anu = createPerson("anu")
anu.greeting();

