export class View {
  _parentElement = document.querySelector('.main--container');
  _data;
  _markUp;
  _curQuestion = -1;
  getOptions(data) {
    this._data = data;
    // console.log(this._data.questions[this._curQuestion].options);
    return this._data.questions[this._curQuestion].options
      .map((option, i) => {
        const optionLetter = String.fromCharCode(65 + i); // Convert index to letter (A=65, B=66, C=67, D=68)

        return `
          <button class="quiz--btn quiz__btns">
            <span class="options  op_data"> ${optionLetter} </span>
            <p class="optuion_ans op_data">${option}</p>
            <span class="status--err--corr op_data">
              <img src="./src/images/icon-error.svg" alt="" class="error hidden" />
              <img
                src="./src/images/icon-correct.svg"
                alt=""
                class="correct hidden"
              />
            </span>
          </button>
      `;
      })
      .join('');
  }
}
