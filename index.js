// Finding  element to an JavaScript Array (references)



const orders = [
    
    {id:1 , item:"Apple", quantity: 3},
    {id:2, item:"Carrot", quantity: 6},
    {id:3 , item:"onion", quantity: 10},
]

let result = orders.find(function (order) {
   return order.item === "Carrot"
}) 

console.log(result);
