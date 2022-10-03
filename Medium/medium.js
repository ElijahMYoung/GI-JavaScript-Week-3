function cutPizzaSlices(x) {
  return function (y) {
    return `Each person gets ${Math.trunc(x / y)} slices`;
  };
}

var sharePizza = cutPizzaSlices(8);
console.log(sharePizza(2));
console.log(sharePizza(3));
