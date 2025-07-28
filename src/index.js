import * as cartService from "./services/cart.js";
import * as wishListService from "./services/wishlist.js";
import createItem from "./services/item.js";

const myCart = [];
const myWhishList = [];

console.log("Welcome to the your Shopee Cart!");

//criando dois itens
const item1 = await createItem("hotwheels ferrari", 20.99, 1);
const item2 = await createItem("hotwheels lamborghini", 39.99, 3);
const item3 = await createItem("hotwheels porsche", 15.99, 2); 
const item4 = await createItem("hotwheels tesla", 25.99, 1);

// adicionei dois itens ao carrinho
await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);
await wishListService.addItemToWishList(myWhishList, item3);
await wishListService.addItemToWishList(myWhishList, item4);
//await cartService.removeItem(myCart, item2);
//await cartService.removeItem(myCart, item2);
//await cartService.removeItem(myCart, item2);

await cartService.displaycart(myCart);
// deletei dois itens do carrinho
// await cartService.deleteItem(myCart, item2.name);
// await cartService.deleteItem(myCart, item1.name);
await cartService.calculateTotal(myCart);
await wishListService.displayWishList(myWhishList);
