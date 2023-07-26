const navbarToggler = document.querySelector(".nav-toggler");
const navbar = document.querySelector(".header__nav");
const menuLinks = document.querySelectorAll(".menu__link");
const body = document.body;

menuLinks.forEach((link) => {
  if (window.location.href === link.href) {
    link.parentElement.classList.add("is-active");
  }
});

const toggleNavbar = () => {
  navbarToggler.classList.toggle("is-active");
  navbar.classList.toggle("is-visible");
  body.classList.toggle("is-locked");
};

navbarToggler.addEventListener("click", toggleNavbar);
