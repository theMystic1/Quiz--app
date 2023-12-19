import { View } from './view.js';

class InitialView extends View {
  _parentElement = document.querySelector('.main--container');
  _markUp;

  renderView() {
    this._markUp = `
        <div class="left--side">
          <span class="headings">
            <h1 class="light">Welcome to the</h1>
            <h1 class="bold">Frontend Quiz!</h1>
          </span>

          <p class="p">Pick a subject to get started. HTML CSS</p>
      </div>

      <div class="right--side">
        <button class="quiz__subject quiz--btn" data-quiz="0">
          <img class="logo" src="./src/images/icon-html.svg" alt="" />
          <p class="subj">HTML</p>
        </button>
        <button class="quiz__subject quiz--btn" data-quiz="1">
          <img class="logo" src="./src/images/icon-css.svg" alt="" />
          <p class="subj">CSS</p>
        </button>
        <button class="quiz__subject quiz--btn" data-quiz="2">
          <img class="logo" src="./src/images/icon-js.svg" alt="" />
          <p class="subj">Javascript</p>
        </button>
        <button class="quiz__subject quiz--btn" data-quiz="3">
          <img
            class="logo"
            src="./src/images/icon-accessibility.svg"
            alt=""
          />
          <p class="subj">Accessibility</p>
        </button>
      </div>
    `;
    this._parentElement.innerHTML = '';
    this._parentElement.insertAdjacentHTML('afterbegin', this._markUp);
  }

  handlerInitialView(handler) {
    document.addEventListener('DOMContentLoaded', handler);
  }
}

export default new InitialView();
