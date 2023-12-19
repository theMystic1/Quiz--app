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

  renderMarkUpQuiz(data, secondData) {
    this._data = data;
    if (this._curQuestion < this._data.questions.length) {
      let questionNum = this._curQuestion + 2;

      // console.log(data);

      this._curQuestion++;
      // document.querySelector(".subj--title").textContent = this._data.title;

      const currentQuestion = this._data.questions[this._curQuestion];

      if (currentQuestion) {
        // console.log(this._data);
        this._markUp = `
            <div class="left--side left--questions_side">
                <p class="question-num">Questions ${questionNum} of ${
          this._data.questions.length
        }</p>
                <h1 class="question">
                ${this._data.questions[this._curQuestion]?.question}
                </h1>
    
                <div class="status-bar">
                  <div class="status"></div>
                </div>
           </div>
    
            <div class="right--side">
               <span class="ops">
                ${this.getOptions(this._data)}
               </span>
                <button class="submit--btn submit_btn">Submit Answer</button>
                <button class="submit--btn hidden next_btn">Next Question</button>
                <p class="error-msg">
                 
                </p>
            </div>
        `;

        this._parentElement.innerHTML = '';
        this._parentElement.innerHTML = this._markUp;
        this.updateProgressBar(this._data);
      } else {
        this.renderSpinner();
        setTimeout(() => this.renderScore(data, secondData), 3000);
      }
      // console.log(this._curQuestion);
      // console.log(this.correctAnswers);
    }
  }

  renderScore(data, secondData) {
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
              src="${this._data.icon}"
              alt=""
            />
            <p class="subj">${this._data.title}</p>
          </span>
          <p class="score">${secondData}</p>
          <p class="questions--number">out of 10</p>
        </button>
        <button class="play--btn">Play Again</button>
    </div>
    
    `;
    this._parentElement.innerHTML = '';
    this._parentElement.insertAdjacentHTML('afterbegin', this._markUp);
  }

  // getCorrectAnswer(data) {
  //   this._data = data;
  //   console.log(data);
  //   return this._data.questions[this._curQuestion].answer;
  // }
}

export default new QuizView();
