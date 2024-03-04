const shoppingCart = require("./shoppingCart");

test("Der Gesamtwert des Cart ist bei 0 Items gleich 0", () => {
  expect(shoppingCart.getTotalValue()).toBe(0);
});

test("Teste die Function addCartItem", () => {
  shoppingCart.addCartItem("Apfel", 5);

  expect(shoppingCart.cart.length).toBe(1);
});

test("Teste die Function addCartItem nochmal", () => {
  shoppingCart.addCartItem("Birne", 3);

  expect(shoppingCart.cart.length).toBe(2);
});
