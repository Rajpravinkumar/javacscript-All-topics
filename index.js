// Spread operator
const shopping_cart = [ {item: "Magi"}];
const additional_cart = ["Macthbox", "Salt", "Beans", "Masala"];
// spread opeartor(...)
let recipe = [...shopping_cart, 45 , {name:"raj"}, ...additional_cart]
shopping_cart[0].item = "Noodles";




console.log(recipe);
