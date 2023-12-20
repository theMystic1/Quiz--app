export class View {
  _parentElement = document.querySelector('.main--container');
  _data;
  _markUp;
  _curQuestion = -1;
  // correctAnswers = [];
  // console.log();
  htmlspecialchars(str) {
    const escapedString = str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');

    return escapedString;
  }

  getOptions(data) {
    this._data = data;

    return this._data.questions[this._curQuestion]?.options
      .map((option, i) => {
        const optionLetter = String.fromCharCode(65 + i);
        const sanitizedOption = this.htmlspecialchars(option);

        return `
          <button class="quiz--btn quiz__btns">
            <span class="options op_data"> ${optionLetter} </span>
            <p class="optuion_ans op_data">${sanitizedOption}</p>
            <span class="status--err--corr op_data">
              <img src="./src/images/icon-error.svg" alt="" class="error hidden" />
              <img src="./src/images/icon-correct.svg" alt="" class="correct hidden" />
            </span>
          </button>
        `;
      })
      .join('');
  }

  updateProgressBar(data) {
    // console.log(this.correctAnswers);
    this._data = data;
    let status = document.querySelector('.status');
    let progress = (this._curQuestion / this._data.questions.length) * 100;

    if (progress < 100) {
      status.style.width = `${progress}%`;
    }

    if (progress > 100) return '';
  }

  renderSpinner() {
    this._markUp = `
      <div class="spinner">
          <img src="./src/images/spinner-svgrepo-com.svg" alt="" />
      </div>
    `;

    // this._parentEl = document.querySelector('.main--container');
    this._parentElement.innerHTML = '';
    this._parentElement.insertAdjacentHTML('afterbegin', this._markUp);
  }

  handleResetQuiz(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.play--btn');
      if (!btn) return;

      handler();
    });
  }

  resetLogo() {
    document.querySelector('.left-section').innerHTML = '';
  }
}

export default new View();
