let menu = document.querySelector(".list ul");
let toggler = document.querySelector(".list .bar");
let cartList = document.querySelector(".icons .cart");
let cartContainer = document.querySelector(".icons .cart .content");
let cartIcon = document.querySelector(".icons .cart-icon i");
let totalItems = document.querySelector(".cart .checkout p span");

// menu items
const products = {
  items: [
    {
      id: 0,
      image: "./images/menu-1.png",
      price: "15.99",
    },
    {
      id: 1,
      image: "./images/menu-2.png",
      price: "15.99",
    },
    {
      id: 2,
      image: "./images/menu-3.png",
      price: "15.99",
    },
    {
      id: 3,
      image: "./images/menu-4.png",
      price: "15.99",
    },
    {
      id: 4,
      image: "./images/menu-5.png",
      price: "15.99",
    },
    {
      id: 5,
      image: "./images/menu-6.png",
      price: "15.99",
    },
    {
      id: 6,
      image: "./images/product-1.png",
      price: "15.99",
    },
    {
      id: 7,
      image: "./images/product-1.png",
      price: "15.99",
    },
    {
      id: 8,
      image: "./images/product-1.png",
      price: "15.99",
    },
  ],
  qty: 0,
};

// render menu items
const menuItems = products.items.slice(0, 6);
const menuDev = document.querySelector(".menu .container");

menuItems.forEach((item) => {
  menuDev.innerHTML += `
  <div class="box">
    <img src="${item.image}" />
    <p>Tasty And Healty</p>
    <span>$${item.price}</span>
    <span class="offer">20.99</span>
    <button onclick="addToCart(${item.id})">Add To Cart</button>
  </div>
  `;
});

// render products
const productsList = products.items.slice(6);
const productsDev = document.querySelector(".products .container");

productsList.forEach((product) => {
  productsDev.innerHTML += `
  <div class="box">
          <div class="icons">
            <i onclick='addToCart(${product.id})' class="fa-solid fa-cart-shopping"></i>
            <i class="fa-solid fa-heart"></i>
            <i class="fa-solid fa-eye"></i>
          </div>
          <div class="imag">
            <img src="${product.image}" alt="" />
          </div>
          <div class="info">
            <h3>Fresh Coffee</h3>
            <div class="stars">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-regular fa-star-half-stroke"></i>
            </div>
            <span>$${product.price}</span>
            <span class="offer">$20.99</span>
          </div>
        </div>
  `;
});

// handle cart
let cart = [];

// handle localStorage
const storedItems = (cart) => {
  window.localStorage.setItem("cartItems", JSON.stringify(cart));
};

if (localStorage.getItem("cartItems")) {
  cart = JSON.parse(localStorage.getItem("cartItems"));
}

//handle addToCart
const addToCart = (id) => {
  const foundItem = cart.find((el) => el.id === id);
  if (foundItem) {
    changeItemCount("plus", foundItem.id);
  } else {
    const item = products.items.find((el) => el.id === id);
    cart.push({
      ...item,
      count: 1,
    });
  }
  storedItems(cart);
  renderCartItems();
};

// render cart items
const renderCartItems = () => {
  cartContainer.innerHTML = "";
  if (cart.length === 0) {
    document.querySelector(".cart .checkout button").className = "hidden";
  } else {
    document.querySelector(".cart .checkout button").className = "0";
    cart.forEach((item) => {
      cartContainer.innerHTML += `<div class="box">
      <img src="${item.image}" alt=""/>
      <div class ='amount'>
      <span onclick="changeItemCount('minus',${item.id})" class='count'>-</span>
      <span>${item.count}</span>
      <span onclick="changeItemCount('plus',${item.id})" class='count'>+</span>
      </div>
      <span class='price'>Price: $${item.price * item.count}</span>
      <i onclick="removeItem( ${item.id} )" class='fa-solid fa-xmark' ></i>
      </div>`;
    });
  }
  products.qty = 0;
  for (let i = 0; i < cart.length; i++) {
    products.qty += cart[i].count;
  }
  totalItems.innerHTML = products.qty;
  document.querySelector(".cart-icon").dataset.total = products.qty;
};
renderCartItems();

// handle remove item
const removeItem = (id) => {
  const itemIndex = cart.findIndex((item) => item.id === id);
  cart.splice(itemIndex, 1);
  renderCartItems(cart);
  storedItems(cart);
};

// handle change item count
const changeItemCount = (sign, id) => {
  const foundItem = cart.find((item) => item.id === id);
  if (sign === "plus" && foundItem.count < 10) {
    foundItem.count++;
  } else if (sign === "minus" && foundItem.count > 1) {
    foundItem.count--;
  }
  storedItems(cart);
  renderCartItems();
};

// handle navbar menu
toggler.onclick = () => {
  menu.classList.toggle("active");
  toggler.classList.toggle("active");
  cartList.classList.remove("active");
};

// handle cart list toggle
cartIcon.onclick = function () {
  cartList.classList.toggle("active");
  menu.classList.remove("active");
  cartIcon.classList.toggle("colored");
};

// close all menus
document.onkeyup = (e) => {
  if (e.key === "Escape") {
    menu.classList.remove("active");
    cartList.classList.remove("active");
    cartIcon.classList.remove("colored");
    toggler.classList.remove("active");
  }
};

//change navbar bg
const changeBg = () => {
  if (window.scrollY >= 100) {
    document.querySelector('header').className = 'colored-bg';
  }
  else {
    document.querySelector('header').className = '';
  }
}
// scroll to top
let scrollUp = document.querySelector(".scroll-up i");
window.onscroll = () => {
  changeBg();
  menu.classList.remove("active");
  toggler.classList.remove("active");

  if (window.scrollY >= 620) {
    scrollUp.style.display = "flex";
  } else {
    scrollUp.style.display = "none";
  }
  scrollUp.onclick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
};
