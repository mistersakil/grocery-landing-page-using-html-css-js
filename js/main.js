/* Navbar Sticky */
const navbar = document.querySelector(".navbar");
window.onscroll = (event) => {
  if (window.scrollY >= 70) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
};
/* End: Navbar Sticky */
/* Mobile menu script */
const mobileMenuHandler = document.querySelector(".mobileMenuHandler");
const mobileMenu = document.querySelector(".mobileMenu");
const mobileMenuClose = document.querySelector(".mobileMenuClose");
mobileMenuHandler.onclick = (event) => {
  mobileMenu.classList.add("active");
};
mobileMenuClose.onclick = (event) => {
  mobileMenu.classList.remove("active");
};
window.onresize = (event) => {
  if (mobileMenu.offsetWidth >= 700) {
    mobileMenu.classList.remove("active");
  }
};
/* End: Mobile menu script */
