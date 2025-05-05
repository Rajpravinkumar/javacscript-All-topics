// Enumerating Properties of n Obejct 
// primitive type vs Reference type 
let cartObj = {
    value: 5
};

function updateCart(cart) {
    cart.value++;

}
updateCart(cartObj);
console.log("Cart available:", cartObj);