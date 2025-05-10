// Arrow function



const orders = [
    
    {id:1 , item:"Apple", quantity: 3},
    {id:2, item:"Carrot", quantity: 6},
    {id:3 , item:"onion", quantity: 10},
]

let result = orders.find( (order) => order.item === "Carrot")
console.log(result);
