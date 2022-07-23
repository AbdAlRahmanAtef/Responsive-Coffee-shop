let menu = document.querySelector(".list ul");
let toggler = document.querySelector(".list .bar");
let megaIcon = document.querySelector(".icons .mega i");
let megaMenu = document.querySelector(".icons .mega ul");
console.log(megaMenu);
console.log(megaIcon);
console.log(menu);
console.log(toggler);
toggler.onclick = () => {
  menu.classList.toggle("active");
  megaMenu.classList.remove("active");
};
megaIcon.onclick = function () {
  megaMenu.classList.toggle("active");
  menu.classList.remove("active");
};
window.onscroll = () => {
  menu.classList.remove("active");
  megaMenu.classList.remove("active");
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
