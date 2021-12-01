let carts = document.querySelectorAll(".add-cart");
let products = [
  {
    name: "grey hoodie",
    tag: "greyhoodie",
    price: 2000,
    inCart: 0,
  },
  {
    name: "black hoodie",
    tag: "blackhoodie",
    price: 1500,
    inCart: 0,
  },
];
for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener("click", () => {
    cartNumbers(products[i]);
  });
}
function onLoadCartNumbers() {
  let productNumbers = localStorage.getItem("cartNumbers");
  if (productNumbers) {
    document.querySelector(".cart span").textContent = productNumbers;
  }
}

function cartNumbers(product) {
  let productNumbers = localStorage.getItem("cartNumbers");
  productNumbers = parseInt(productNumbers);
  if (productNumbers) {
    localStorage.setItem("cartNumbers", productNumbers + 1);
    document.querySelector(".cart span").textContent = productNumbers + 1;
  } else {
    localStorage.setItem("cartNumbers", 1);
    document.querySelector(".cart span").textContent = 1;
  }
  setItems(product);
}

function setItems(product) {
  var cartItems = localStorage.getItem("productsInCart");
  console.log("my cartItems are", cartItems);

  product.inCart = 1;
  cartItems = {
    [product.tag]: product,
  };

  localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}
onLoadCartNumbers();
