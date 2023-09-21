let burger = document.querySelector(".burger-menu-span");
let menu = document.querySelector(".header__menu");
let logo = document.querySelector(".header__logo");
let list = document.querySelector(".menu__list");

burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    menu.classList.toggle("active");
    logo.classList.toggle("active");
    list.classList.toggle("active");
});