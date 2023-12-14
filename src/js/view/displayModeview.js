class DisplayMode {
  _parentEl = document.querySelector("body");
  // _toggleBtn = document.querySelector(".toggle--btn");
  _toggleBtn = document.querySelector(".span--toggle_mode");
  _toggleMode = document.querySelector(".toggle--btn");
  _lightMoon = document.querySelector(".light-img--moon");
  _darkMoon = document.querySelector(".dark-img--moon");
  _lightSun = document.querySelector(".light-img--sun");
  _darkSun = document.querySelector(".dark-img--sun");

  toggleMODE() {
    document
      .querySelector(".toggle--btn")
      .classList.toggle("toggle_dark--mode");
    document.querySelector("body").classList.toggle("dark-theme");
    document.querySelector(".light-img--moon").classList.toggle("hidden");
    document.querySelector(".dark-img--moon").classList.toggle("hidden");
    document.querySelector(".light-img--sun").classList.toggle("hidden");
    document.querySelector(".dark-img--sun").classList.toggle("hidden");
  }
  handleMode() {
    this._toggleBtn.addEventListener("click", this.toggleMODE);
  }
}

export default new DisplayMode();
