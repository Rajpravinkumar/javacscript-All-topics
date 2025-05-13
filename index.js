// Testing elements in javascript Array (Reference types )
const items = [
    { id: 1, name: "Mobiles", isDeliverable: true },
    { id: 2, name: "Accessories", isDeliverable: true },
    { id: 3, name: "Laptop", isDeliverable: false },
    { id: 4, name: "AC", isDeliverable: true },
    { id: 5, name: "T.V", isDeliverable: false },
    
]
 //every () - method
let allDeliverables = items.every(function (value) {
    return value.isDeliverable == true;
});

console.log(allDeliverables);

// some () - method  
let notDeliverables = items.some(function (value) {
  return value.isDeliverable == false;
});

console.log(notDeliverables);
