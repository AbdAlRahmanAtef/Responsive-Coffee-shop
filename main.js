let menu = document.querySelector(".list ul");
let toggler = document.querySelector(".list .bar");
let megaIcon = document.querySelector(".icons .mega i");
let megaMenu = document.querySelector(".icons .mega-menu");
let shoppingIcon = document.querySelector(".icons .mega i");
toggler.onclick = () => {
  menu.classList.toggle("active");
  megaMenu.classList.remove("active");
};
megaIcon.onclick = function () {
  megaMenu.classList.toggle("active");
  menu.classList.remove("active");
  shoppingIcon.classList.toggle("colored");
  window.onscroll = () => {
    menu.classList.remove("active");
    megaMenu.classList.remove("active");
    shoppingIcon.classList.remove("colored");
  };
};
document.onkeyup = (e) => {
  if (e.key === "Escape") {
    menu.classList.remove("active");
    megaMenu.classList.remove("active");
  }
};
let scrollUp = document.querySelector(".scroll-up i");
window.onscroll = () => {
  if (window.scrollY >= 620) {
    scrollUp.style.display = "flex";
  } else {
    scrollUp.style.display = "none";
  }
};
scrollUp.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// Add To Carte
let imgArry = [];

if (window.sessionStorage.getItem("img") !== null) {
  imgArry = imgArry.concat(JSON.parse(window.sessionStorage.getItem("img")));

  imgArry.forEach((img) => {
    let image = document.createElement("img");
    image.src = img;
    let imageBox = document.createElement("div");
    imageBox.className = "imag";
    imageBox.append(image);

    // Create P Element
    let p = document.createElement("p");
    p.append(document.createTextNode(`Carte Item`));

    // Create Span
    let span = document.createElement("span");
    span.append(document.createTextNode("$15.99"));

    // Create Text Container
    let text = document.createElement("div");
    text.className = "text";
    // Append Text Elements
    text.append(p);
    text.append(span);

    // Create Close Icon
    let close = document.createElement("i");
    close.className = "fa-solid fa-xmark";

    // Create Main Box
    let box = document.createElement("div");
    box.className = "box";

    // Append Elements
    box.append(imageBox);
    box.append(text);
    box.append(close);
    megaMenu.prepend(box);

    // Close Function
    close.addEventListener("click", (e) => {
      imgArry = imgArry.filter(
        (ele) =>
          ele !== `${e.currentTarget.parentElement.querySelector("img").src}`
      );
      window.sessionStorage.setItem("img", JSON.stringify(imgArry));
      e.target.parentElement.remove();
    });
  });
}

let addButton = document.querySelectorAll(".menu button");
addButton.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    createElements(e);
    remveItem();
  });
});

// Create All Elements
function createElements(e) {
  let img = e.target.parentElement.querySelector("img");
  let image = document.createElement("img");
  image.src = img.src;

  // Set in sessionStorage
  imgArry = imgArry.concat(image.src);
  window.sessionStorage.setItem("img", JSON.stringify(imgArry));

  let imageBox = document.createElement("div");
  imageBox.className = "imag";
  imageBox.append(image);

  // Create P Element
  let p = document.createElement("p");
  p.append(document.createTextNode(`Carte Item`));
  // Create Span
  let span = document.createElement("span");
  span.append(document.createTextNode("$15.99"));

  // Create Text Container
  let text = document.createElement("div");
  text.className = "text";
  // Append Text Elements
  text.append(p);
  text.append(span);

  // Create Close Icon
  let close = document.createElement("i");
  close.className = "fa-solid fa-xmark";

  // Create Main Box
  let box = document.createElement("div");
  box.className = "box";

  // Append Elements
  box.append(imageBox);
  box.append(text);
  box.append(close);
  megaMenu.prepend(box);

  close.addEventListener("click", (e) => {
    imgArry = imgArry.filter(
      (ele) =>
        ele !== `${e.currentTarget.parentElement.querySelector("img").src}`
    );
    window.sessionStorage.setItem("img", JSON.stringify(imgArry));
    e.target.parentElement.remove();
  });
}
