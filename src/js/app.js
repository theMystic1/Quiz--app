// controllerjs
// import json from "url../../data.json";
import * as model from './model.js';
import displayModeview from './view/displayModeview.js';
import QuizView from './view/quiz_view.js';
import initialView from './view/initialView.js';
import nextQuestionView from './view/nextQuestionView.js';

// 1 render the quiz select interface
let dataQ;
initialView.renderView();

const controlSubjectsView = async function (data) {
  try {
    dataQ = data;
    await model.fetchData();
    QuizView.getQuizSubject(model.state.quizzes[data]);
    QuizView.renderMarkUpQuiz(model.state.quizzes[data]);
  } catch (error) {
    console.error(error);
  }
};

const controlAnswers = function () {
  return model.state.quizzes[dataQ].questions[QuizView._curQuestion].answer;
};

const controlNextQuestion = function () {
  QuizView.renderMarkUpQuiz(model.state.quizzes[dataQ]);
  QuizView.updateProgressBar(model.state.quizzes[dataQ]);
  nextQuestionView.handlerOptions(false);
};

// const controlOptionBtns = function () {};

const init = function () {
  displayModeview.handleMode();
  nextQuestionView.handlerOptions();
  QuizView.handlerGetQuestions(controlSubjectsView);
  nextQuestionView.handleNextQuestion(controlAnswers, controlNextQuestion);
};
init();
