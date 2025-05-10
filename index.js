// Combining & Etracting elements Array 

const shopping_cart = [ {item: "Magi"}];
const additional_cart = ["Macthbox", "Salt", "Beans", "Masala"];
// Combine
let recipe = shopping_cart.concat(additional_cart);
shopping_cart[0].item = "Noodles";

// Extract
let extractedInfo = recipe.slice(1, 3);

console.log(extractedInfo);

console.log(recipe);
