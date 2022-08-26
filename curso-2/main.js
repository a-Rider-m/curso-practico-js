const menuEmail = document.querySelector(".navbar-email");
const mobileMenu = document.querySelector(".mobile-menu");
const aside = document.querySelector(".product-detail");

const desktopMenu = document.querySelector(".desktop-menu");
const burgerMenu = document.querySelector(".menu");
const shoppingCart = document.querySelector(".navbar-shopping-cart");

menuEmail.addEventListener("click", toggleDesktopMenu);
burgerMenu.addEventListener("click", toggleMobileMenu);
shoppingCart.addEventListener("click", toggleShoppingCart);

function toggleDesktopMenu() {
    const isAsideClosed = aside.classList.contains("inactive");
    
    if (!isAsideClosed) {
        aside.classList.add("inactive");
    }

    desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
    const isAsideClosed = aside.classList.contains("inactive");
    
    if (!isAsideClosed) {
        aside.classList.add("inactive");
    }

    mobileMenu.classList.toggle("inactive");
}

function toggleShoppingCart() {
    const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
    const isDeskTopMenuClosed = desktopMenu.classList.contains("inactive");

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add("inactive");
    }

    if (!isDeskTopMenuClosed) {
        desktopMenu.classList.add("inactive");
    }
    
    aside.classList.toggle("inactive");
}


