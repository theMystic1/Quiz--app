import { View } from './view.js';
class QuizView extends View {
  _rightContainer = document.querySelector('.right--side');

  data;

  handlerGetQuestions(handler) {
    // this._data = data;
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.quiz__subject');
      if (!btn) return;
      this.data = btn.dataset.quiz;
      handler(this.data);
      // console.log(btn);
    });
  }

  getQuizSubject(data) {
    const container = document.querySelector('.left-section');
    // console.log(data.icon);
    this._markUp = `
    <img src=${data.icon} alt="" />
    <p class="subj--title">${data.title}</p>
    `;

    container.innerHTML = '';
    container.insertAdjacentHTML('afterbegin', this._markUp);
  }

  renderMarkUpQuiz(data) {
    this._data = data;
    this._curQuestion++;
    // console.log(data);
    let questionNum = this._curQuestion + 1;

    // document.querySelector(".subj--title").textContent = this._data.title;
    this._markUp = `
        <div class="left--side left--questions_side">
            <p class="question-num">Questions ${questionNum} of ${
      this._data.questions.length
    }</p>
            <h1 class="question">
            ${this._data.questions[this._curQuestion].question}
            </h1>

            <div class="status-bar">
              <div class="status"></div>
            </div>
       </div>

        <div class="right--side">
            ${this.getOptions(this._data)}
            <button class="submit--btn submit_btn">Submit Answer</button>
            <button class="submit--btn hidden next_btn">Next Question</button>
            <p class="error-msg">
              <img src="./src/images/icon-error.svg" alt="" />
              Please select an answer
            </p>
        </div>
    `;

    this._parentElement.innerHTML = '';
    this._parentElement.innerHTML = this._markUp;
  }

  getCorrectAnswer(data) {
    this._data = data;
    return this._data.questions[this._curQuestion].answer;
  }
}

export default new QuizView();
