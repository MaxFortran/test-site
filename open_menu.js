let burger = document.querySelector(".burger");
let headerMenu = document.querySelector(".header-bottom");
let menu = document.querySelector(".menu-list");
let body = document.querySelector("body");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  headerMenu.classList.toggle("active");
  body.classList.toggle("lock");
});

menu.addEventListener("click", () => {
  headerMenu.classList.remove("active");
  burger.classList.remove("active");
  body.classList.remove("lock");
});
