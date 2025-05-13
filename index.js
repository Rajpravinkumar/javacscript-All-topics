// filtering a javascript Array 

const cart_items = [
    { id: 1, items: "Android Mobile", cost: "6500" },
    { id: 2, items: "I Phone Mobile", cost: "25000" },
    { id: 3, items: "Windows Mobile", cost: "8500" },
    
]

let affortable_phones = cart_items.filter((Value) => Value.cost < 10000)
console.log("Affortable Phone:" , affortable_phones);
