import { View } from './view.js';

class NextQuestion extends View {
  opBtn;
  optionSelected = false;

  handlerOptions() {
    this._parentElement.addEventListener('click', e => {
      if (this.optionSelected) return;

      const optionBtn = e.target.closest('.quiz__btns');
      if (!optionBtn) return;

      this.opBtn = optionBtn;
      const allOptionsBtn = document.querySelectorAll('.quiz__btns');
      allOptionsBtn.forEach(btn =>
        btn.classList.remove('active_btn__answered')
      );

      optionBtn.classList.add('active_btn__answered');
      const optionAlph = optionBtn.querySelector('.options');
      optionAlph.classList.add('active_btn--option');

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

      nextBtn.classList.toggle('hidden');
      submitQuizBtn.classList.toggle('hidden');

      // Display correct answers class regardless of selected option
      const correctAnswer = handler();
      const optionBtnChild = this.opBtn?.querySelector('.optuion_ans');
      const optionAlph = this.opBtn?.querySelector('.options');

      if (optionBtnChild) {
        if (optionBtnChild.textContent === correctAnswer) {
          this.opBtn?.classList.add('correct-anser');
          this.opBtn?.querySelector('.error').classList.add('hidden');
          this.opBtn?.querySelector('.correct').classList.remove('hidden');
          optionAlph.style.backgroundColor = '#26d782';
        } else {
          this.opBtn?.classList.add('wrong-anser');
          this.opBtn?.querySelector('.correct').classList.add('hidden');
          this.opBtn?.querySelector('.error').classList.remove('hidden');
          optionAlph.style.backgroundColor = '#ee5454';
        }
      }

      if (submitBtn.textContent === 'Next Question') {
        if (!this.optionSelected) {
          this.renderError();
          return;
        }

        this.optionSelected = false; // Reset optionSelected for the next question

        // Reset the styling and logic associated with the selected option
        this.opBtn?.classList.remove('correct-anser', 'wrong-anser');
        this.opBtn?.querySelector('.correct')?.classList.add('hidden');
        this.opBtn?.querySelector('.error')?.classList.add('hidden');
        optionAlph?.removeAttribute('style');

        handler2();
      }
    });
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
