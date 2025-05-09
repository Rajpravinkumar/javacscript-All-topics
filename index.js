// Date Object
const ddate = Date();

const now = new Date();
const anotherDate = new Date('july 6 1996')
console.log(ddate);
console.log(now.getFullYear());
console.log(anotherDate.getFullYear())
// odject destructing 
let [month, date, year] = new Date().toLocaleDateString("en-us").split("/");

// other type 
console.log( new Date().toLocaleDateString("en-us").split("/"));

console.log(month , date ,year);
