export const addToDb = (id) => {
  let shoppingCart = [];

  const isCartAvailable = JSON.parse(localStorage.getItem('players-cart'));
  if (isCartAvailable && isCartAvailable.length > 0) {
    if (isCartAvailable.includes(id)) {
      const index = isCartAvailable.indexOf(id);
      isCartAvailable.splice(index, 1);
      shoppingCart.push(...isCartAvailable);
    } else {
      shoppingCart.push(...isCartAvailable, id);
    }
  } else {
    shoppingCart.push(id);
  }

  localStorage.setItem('players-cart', JSON.stringify(shoppingCart));
};


export const deleteShoppingCart = () => {
  localStorage.removeItem('players-cart');
};
