class QuizView {
  _parentElement = document.querySelector(".main--container");
  _rightContainer = document.querySelector(".right--side");
  _data;
  _markUp;
  _curQuestion = 0;

  handlerGetQuestions(handler) {
    // this._data = data;
    this._rightContainer.addEventListener("click", function (e) {
      const btn = e.target.closest(".quiz__subject");
      if (!btn) return;
      let data = btn.dataset.quiz;
      // console.log(data);
      handler(data);
      // console.log(btn);
    });
  }

  getOptions(data) {
    this._data = data;
    // console.log(this._data.questions[this._curQuestion].options);
    return this._data.questions[this._curQuestion].options
      .map((option, i) => {
        const optionLetter = String.fromCharCode(65 + i); // Convert index to letter (A=65, B=66, C=67, D=68)

        return `
      <button class="quiz--btn quiz__btns">
        <span class="options active_btn--option op_data"> ${optionLetter} </span>
        <p class="optuion_ans op_data">${option}</p>
        <span class="status--err--corr op_data hidden">
          <img src="./src/images/icon-error.svg" alt="" class="error" />
          <img
            src="./src/images/icon-correct.svg"
            alt=""
            class="correct"
          />
        </span>
      </button>
      `;
      })
      .join("");
  }

  getQuizSubject(data) {
    const container = document.querySelector(".left-section");
    // console.log(data.icon);
    this._markUp = `
    <img src=${data.icon} alt="" />
    <p class="subj--title">${data.title}</p>
    `;

    container.innerHTML = "";
    container.insertAdjacentHTML("afterbegin", this._markUp);
  }

  renderMarkUpQuiz(data) {
    this._data = data;
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
    <button class="submit--btn">Submit Answer</button>
    <p class="error-msg">
      <img src="./src/images/icon-error.svg" alt="" />
      Please select an answer
    </p>
  </div>
    `;

    this._parentElement.innerHTML = "";
    this._parentElement.innerHTML = this._markUp;
  }

  getCorrectAnswer(data) {
    this._data = data;
    return this._data.questions[this._curQuestion].answer;
  }

  handlerOptions() {
    this._parentElement.addEventListener("click", function (e) {
      const optionBtn = e.target.closest(".quiz__btns");
      if (!optionBtn) return;
      const allOptionsBtn = document.querySelectorAll(".quiz__btns");
      allOptionsBtn.forEach((btn) =>
        btn.classList.remove("active_btn__answered")
      );
      // active_btn__answered
      optionBtn.classList.add("active_btn__answered");
      const optionDet = optionBtn.querySelectorAll(".op_data");
      const optionArr = [...optionDet];
      console.log(optionArr);
    });
  }
}

export default new QuizView();
