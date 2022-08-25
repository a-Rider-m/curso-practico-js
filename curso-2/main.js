const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const burgerMenu = document.querySelector(".menu");

menuEmail.addEventListener("click", toggleDesktopMenu);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle("inactive");
}

burgerMenu.addEventListener("click", toggleMobileMenu);

function toggleMobileMenu() {
    mobileMenu.classList.toggle("inactive");
}
