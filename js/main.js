/* Navbar */

// Sticky
const navbar = document.querySelector(".navbar");
window.onscroll = (event) => {
  if (window.scrollY >= 70) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
};
// Navbar Toggle
const mobileMenuHandler = document.querySelector(".mobileMenuHandler");

mobileMenuHandler.onclick = function (event) {
  this.firstElementChild.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

window.onresize = (event) => {
  if (document.body.offsetWidth >= 700) {
    navbar.classList.remove("active");
    mobileMenuHandler.firstElementChild.classList.remove("fa-times");
  }
};
// Navbar close on item Click
navbar.onclick = function (event) {
  if (event.target.tagName == "A") {
    mobileMenuHandler.firstElementChild.classList.remove("fa-times");
    navbar.classList.remove("active");
  }
};
/* End: Navbar */
