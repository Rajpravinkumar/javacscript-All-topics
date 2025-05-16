//date object
let [month, date, year] = new Date().toLocaleDateString("en-IN").split("/");
console.log(month, date , year);
