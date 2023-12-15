import { View } from './view.js';
class NextQuestion extends View {
  opBtn;
  optionSelected;
  handlerOptions(optionSelected = false) {
    // optionSelected = false;
    this._parentElement.addEventListener('click', function (e) {
      if (optionSelected) return;

      const optionBtn = e.target.closest('.quiz__btns');
      this.opBtn = optionBtn;
      if (!optionBtn) return;
      const allOptionsBtn = document.querySelectorAll('.quiz__btns');
      allOptionsBtn.forEach(btn =>
        btn.classList.remove('active_btn__answered')
      );
      // active_btn__answered
      optionBtn.classList.add('active_btn__answered');
      const optionAlph = optionBtn.querySelector('.options');
      optionAlph.classList.add('active_btn--option');

      optionSelected = true;
    });
  }

  handleNextQuestion(handler, handler2) {
    this._parentElement.addEventListener('click', function (e) {
      const submitBtn = e.target.closest('.submit--btn');
      if (!submitBtn) return;
      document.querySelector('.next_btn').classList.toggle('hidden');
      document.querySelector('.submit_btn').classList.toggle('hidden');

      // const QuizBtns = [...document.querySelectorAll('.quiz__btns')];

      // if()
      const optionBtnChild = this.opBtn.querySelector('.optuion_ans');
      const optionAlph = this.opBtn.querySelector('.options');
      if (optionBtnChild.textContent === handler()) {
        this.opBtn.classList.add('correct-anser');
        this.opBtn.querySelector('.error').classList.add('hidden');
        this.opBtn.querySelector('.correct').classList.remove('hidden');
        optionAlph.style.backgroundColor = '#26d782';
      } else {
        this.opBtn.classList.add('wrong-anser');
        this.opBtn.querySelector('.correct').classList.add('hidden');
        this.opBtn.querySelector('.error').classList.remove('hidden');
        optionAlph.style.backgroundColor = '#ee5454';

        // this.optionSelected = true;
      }

      if (submitBtn.textContent === 'Next Question') handler2();
      //later fix
      // const getAllans = document.querySelectorAll('.optuion_ans');
      // const allAnsArr = [...getAllans];
      // allAnsArr.find(ans => {
      //   if (ans.textContent === handler()) {
      //     this.opBtn.classList.add('correct-anser');
      //     optionAlph.style.backgroundColor = '#26d782';
      //     this.opBtn.querySelector('.correct').classList.remove('hidden');
      //     this.opBtn.querySelector('.error').classList.add('hidden');
      //   }
      // });
    });
  }
}

export default new NextQuestion();
