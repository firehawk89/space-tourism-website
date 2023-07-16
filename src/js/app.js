const navbarToggler = document.querySelector(".nav-toggler");
const navbar = document.querySelector(".header__nav");
const body = document.body;

const toggleNavbar = () => {
  navbarToggler.classList.toggle("is-active");
  navbar.classList.toggle("is-visible");
  body.classList.toggle("is-locked");
};

navbarToggler.addEventListener("click", toggleNavbar);
