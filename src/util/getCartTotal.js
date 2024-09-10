export function getCartTotal(cart) {
    let cartTotal = 0;
    cart.items.forEach((item) => {
      const itemTotal = item.price * item.quantity;
      cartTotal = cartTotal + itemTotal;
    });
    return cartTotal;
  }