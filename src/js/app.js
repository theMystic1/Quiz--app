// controllerjs
// import json from "url../../data.json";
import * as model from "./model.js";
import QuizView from "./view/quiz_view.js";
import displayModeview from "./view/displayModeview.js";

// 1 render the quiz select interface

const controlSubjectsView = async function (data) {
  await model.fetchData();
  QuizView.getQuizSubject(model.state.quizzes[data]);
  QuizView.renderMarkUpQuiz(model.state.quizzes[data]);
};

// const controlOptionBtns = function () {};

const init = function () {
  displayModeview.handleMode();
  QuizView.handlerGetQuestions(controlSubjectsView);
  QuizView.handlerOptions();
};
init();
