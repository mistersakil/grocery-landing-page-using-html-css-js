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

/* Count Down */
let days = document.querySelector("#days");
let hours = document.querySelector("#hours");
let minutes = document.querySelector("#minutes");
let seconds = document.querySelector("#seconds");
let futureDate = new Date(2024, 01, 01, 00, 00, 00, 00);

const second = 1000;
const minute = 60 * second;
const hour = 60 * minute;
const day = 24 * hour;
let dayText, hourText, minuteText, secondText;

const countDown = () => {
  const currentDate = new Date();
  const remainingTime = futureDate - currentDate;

  dayText = Math.floor(remainingTime / day);
  hourText = Math.floor((remainingTime % day) / hour);
  minuteText = Math.floor((remainingTime % hour) / minute);
  secondText = Math.ceil((remainingTime % minute) / second);

  days.innerText = dayText <= 0 ? `0${dayText}` : dayText;
  hours.innerText = hourText <= 0 ? `0${hourText}` : hourText;
  minutes.innerText = minuteText <= 0 ? `0${minuteText}` : minuteText;
  seconds.innerText = secondText <= 0 ? `0${secondText}` : secondText;
};
setInterval(() => countDown(), 1000);

/* End: Count Down */
