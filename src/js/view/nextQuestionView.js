import { View } from './view.js';

class NextQuestion extends View {
  opBtn;
  optionSelected = false;
  correctAnswers = [];

  handlerOptions() {
    this._parentElement.addEventListener('click', e => {
      if (this.optionSelected) return;

      const optionBtn = e.target.closest('.quiz__btns');
      if (!optionBtn) return;

      this.opBtn = optionBtn;
      this.clearAllOptions();
      this.markSelectedOption();
      this.optionSelected = true;
    });
  }

  handleNextQuestion(handler, handler2) {
    this.handlerOptions();

    this._parentElement.addEventListener('click', e => {
      const submitBtn = e.target.closest('.submit--btn');
      if (!submitBtn) return;

      const nextBtn = document.querySelector('.next_btn');
      const submitQuizBtn = document.querySelector('.submit_btn');

      if (!this.optionSelected) {
        this.renderError();
        return;
      } else {
        this._parentElement.querySelector('.error-msg').innerHTML = '';
        nextBtn.classList.toggle('hidden');
        submitQuizBtn.classList.toggle('hidden');

        const correctAnswer = handler();
        this.handleAnswerFeedback(correctAnswer);

        if (submitBtn.textContent === 'Next Question') {
          this.optionSelected = false;
          this.resetSelectedOption();
          handler2();
        }
      }
    });
  }

  clearAllOptions() {
    const allOptionsBtn = document.querySelectorAll('.quiz__btns');
    allOptionsBtn.forEach(btn => btn.classList.remove('active_btn__answered'));
  }

  markSelectedOption() {
    this.opBtn.classList.add('active_btn__answered');
    const optionAlph = this.opBtn.querySelector('.options');
    optionAlph.classList.add('active_btn--option');
  }

  handleAnswerFeedback(correctAnswer) {
    const optionBtnChild = this.opBtn?.querySelector('.optuion_ans');
    const optionAlph = this.opBtn?.querySelector('.options');

    if (optionBtnChild) {
      if (optionBtnChild.textContent === correctAnswer) {
        this.markCorrectAnswer(optionAlph);
        this.correctAnswers.push(1);
      } else {
        this.markWrongAnswer(optionAlph);
      }
    }
  }

  getCorrectAnswesArr() {
    // console.log(this.correctAnswers);
    return this.correctAnswers.reduce((a, b) => a + b, 0) / 2;
  }

  markCorrectAnswer(optionAlph) {
    this.opBtn?.classList.add('correct-anser');
    this.opBtn?.querySelector('.error').classList.add('hidden');
    this.opBtn?.querySelector('.correct').classList.remove('hidden');
    optionAlph.style.backgroundColor = '#26d782';
  }

  markWrongAnswer(optionAlph) {
    this.opBtn?.classList.add('wrong-anser');
    this.opBtn?.querySelector('.correct').classList.add('hidden');
    this.opBtn?.querySelector('.error').classList.remove('hidden');
    optionAlph.style.backgroundColor = '#ee5454';
  }

  resetSelectedOption() {
    this.opBtn?.classList.remove('correct-anser', 'wrong-anser');
    this.opBtn?.querySelector('.correct')?.classList.add('hidden');
    this.opBtn?.querySelector('.error')?.classList.add('hidden');
    this.opBtn?.querySelector('.options')?.removeAttribute('style');
  }

  renderError() {
    this._markUp = `
      <img src="./src/images/icon-error.svg" alt="" />
      Please select an answer
    `;
    const parentEl = this._parentElement.querySelector('.error-msg');
    parentEl.innerHTML = '';
    parentEl.innerHTML = this._markUp;
  }
}

export default new NextQuestion();
