// controllerjs

const body = document.querySelector("body");
const toggleBtn = document.querySelector(".span--toggle_mode");
const toggleMode = document.querySelector(".toggle--btn");
const lightMoon = document.querySelector(".light-img--moon");
const darkMoon = document.querySelector(".dark-img--moon");
const lightSun = document.querySelector(".light-img--sun");
const darkSun = document.querySelector(".dark-img--sun");

toggleBtn.addEventListener("click", function () {
  toggleMode.classList.toggle("toggle_dark--mode");
  body.classList.toggle("dark-theme");
  lightMoon.classList.toggle("hidden");
  darkMoon.classList.toggle("hidden");
  lightSun.classList.toggle("hidden");
  darkSun.classList.toggle("hidden");
});
