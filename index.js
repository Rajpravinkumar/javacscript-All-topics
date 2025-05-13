// JavaScript Chaining Methods

let products = [
  { id: 1, tittle: "Android Phone", cost: 7500 },
  { id: 2, tittle: "Gaming Computer", cost: 90500 },
  { id: 3, tittle: "HeadPhone", cost: 2400 },
];

//sorting it using lowest price.
let final = products.sort((a, b) => {
    // a - b (ascending) ,  b - a (descending)
    return a.cost - b.cost;
}).sort((a, b) => {
    // a < b = -1
    if (a.tittle < b.tittle) return -1;

    // a > b = 1
    if (a.tittle > b.tittle) return 1;

    return 1;
})
.filter((val) => val.cost <= 8000) 
.map( (val) =>  val.tittle + " - $" + val.cost);
        
// map it like this : // Android phone -7500 
console.log(final);

