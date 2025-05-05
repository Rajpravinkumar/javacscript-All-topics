// for - in 
//use in object 
const person = {
    name: "anbu",
    age: 24,
    sex: "male"

}

for (let key in person) {
    console.log(key + " :" , person[key]);
    
}
// use in array 
let array = ["red", "blue", "green "]

for (let key in array) {
    console.log(array[key])
}