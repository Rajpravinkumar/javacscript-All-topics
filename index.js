//OOP (Object Oriented Programming )
let [month, date, year] = new Date().toLocaleDateString("en-IN").split("/");
console.log(month, date, year);

let now = new Date();

let hours = now.getHours(); // 0 - 23
let minutes = now.getMinutes(); // 0 - 59
let seconds = now.getSeconds(); // 0 - 59

console.log(`Current Time: ${hours}:${minutes}:${seconds}`);
