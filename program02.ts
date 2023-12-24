//Implement a simple shopping cart program using an array. Create functions to add items, remove items, and update quantities using the splice method. Print the cart's contents after each operation.
//====================================================================================================================================================================================================

//Function to add items in the cart
function addToCart(array: string[], index: number, value: string) {
  array.splice(index, 0, value);
  console.log(array);
}
//Now using this function to add items in the cart
let shoppingCart: string[] = [];
addToCart(shoppingCart, 0, "cap"); //prints "shoppingCart" array with an element "cap" at 0 index
addToCart(shoppingCart, 1, "socks"); //prints "shoppingCart" array with two elements "cap", "socks"
addToCart(shoppingCart, 2, "gloves"); //prints "shoppingCart" array with three elements "cap", "socks", "gloves"

//_______________________________________________________________________________________

// //Function to remove items from the cart
function removeFromCart(array: string[], index: number) {
  array.splice(index, 1);
  console.log(array);
}
//Now using this function to remove items from the cart
removeFromCart(shoppingCart, 2); //removes "gloves" from 2nd index of array "shoppingCart"

//_______________________________________________________________________________________

