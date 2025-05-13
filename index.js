// JavaScript arrays - reduce method


// reduce method in references
const shoppingCart = [
  { id: 1, item: "Organic Milk", cost: 45 },
  { id: 2, item: "Bread", cost: 20 },
  { id: 3, item: "Maagi", cost: 12 },
];

const addCost = (accumlator, currentval) => accumlator + currentval.cost;


let totalaCost = shoppingCart.reduce( addCost, 10 )

console.log("Total values : ", totalaCost);

//reduce method in primitives 

const donation = [323, 324, 554, 412, 543];

let totalDonation = donation.reduce(function (previousVal, currentval) {
    return previousVal + currentval;
});
console.log("TotalDonations:" , totalDonation);
