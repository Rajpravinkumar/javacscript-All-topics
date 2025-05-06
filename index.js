// Cloning an JavaScript Object 

let user = {
    name: "anbu ",
    getFullName() {
        console.log(`My name is ${this.name}`)
    }

}
//Spread operators 
let anotherName = {...user}
/* let anotherName = Object.assign({age : 23}, user);
console.log(anotherName);
 */
console.log(anotherName)