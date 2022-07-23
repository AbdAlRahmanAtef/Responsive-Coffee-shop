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
