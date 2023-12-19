import { View } from './view';
class CompletedView extends View {
  renderScore(data) {
    this._data = data;
    this._markUp = `
    <div class="left--side">
      <span class="headings">
        <h1 class="light">Quiz completed</h1>
        <h1 class="bold">You scored...</h1>
      </span>
    </div>

    <div class="right--side">
        <button class="score--btn">
          <span class="scores--logo">
            <img
              class="logo"
              src="./src/images/icon-accessibility.svg"
              alt=""
            />
            <p class="subj">Accessibility</p>
          </span>
          <p class="score">8</p>
          <p class="questions--number">out of 10</p>
        </button>
        <button class="submit--btn">Play Again</button>
    </div>
    
    `;
    this._parentElement.innerHTML = '';
    this._parentElement.insertAdjacentHTML('afterbegin', this._markUp);
  }
}

export default new CompletedView();
