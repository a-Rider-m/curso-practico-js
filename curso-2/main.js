const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

const burgerMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

const shoppingCart = document.querySelector(".navbar-shopping-cart");
const productDetail = document.querySelector(".product-detail");

menuEmail.addEventListener("click", toggleDesktopMenu);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle("inactive");
}

burgerMenu.addEventListener("click", toggleMobileMenu);

function toggleMobileMenu() {
    mobileMenu.classList.toggle("inactive");
}

shoppingCart.addEventListener("click", toggleShoppingCart);

function toggleShoppingCart() {
    productDetail.classList.toggle("inactive");
}
