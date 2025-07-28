async function addItemToWishList(userWishList, item) {
  userWishList.push(item);
}

async function displayWishList(userWishList) {
  console.log("\nShopee wish list:");
  userWishList.forEach((item, index) => {
    console.log(
      `${index + 1}. ${item.name} - R$ ${item.price} | ${
        item.quantity
      }x | Subtotal = ${item.subtotal()}`
    );
  });
}

export { addItemToWishList, displayWishList };