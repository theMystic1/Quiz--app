// controllerjs
// import json from "url../../data.json";
import * as model from './model.js';
import displayModeview from './view/displayModeview.js';
import QuizView from './view/quiz_view.js';
import initialView from './view/initialView.js';
import nextQuestionView from './view/nextQuestionView.js';
import view from './view/view.js';

// 1 render the quiz select interface
let dataQ;

const controlInitialView = function () {};

const controlSubjectsView = async function (data) {
  try {
    dataQ = data;
    await model.fetchData();
    QuizView.getQuizSubject(model.state.quizzes[data]);
    // view.renderSpinner()
    view.renderSpinner();
    setTimeout(
      () => QuizView.renderMarkUpQuiz(model.state.quizzes[data]),
      1000
    );
  } catch (error) {
    throw error;
  }
};

const controlAnswers = function () {
  return model.state.quizzes[dataQ].questions[QuizView._curQuestion].answer;
};

const controlNextQuestion = function () {
  QuizView.renderMarkUpQuiz(
    model.state.quizzes[dataQ],
    nextQuestionView.getCorrectAnswesArr()
  );
  // console.log(nextQuestionView.getCorrectAnswesArr);
  QuizView.updateProgressBar(model.state.quizzes[dataQ]);
  nextQuestionView.handlerOptions(false);
};

const controlResetQuiz = async function () {
  // Clear the current quiz index
  dataQ = undefined;

  // Reset the QuizView state
  QuizView._curQuestion = -1; // Assuming _curQuestion is a property in QuizView that tracks the current question
  view.resetLogo();

  nextQuestionView.correctAnswers.length = 0;

  // Re-fetch the data (if needed)
  await model.fetchData();

  // Render the initial view
  view.renderSpinner();
  setTimeout(() => initialView.renderView(), 1000);

  // Render the quiz subject (if needed)
  if (dataQ !== undefined) {
    QuizView.getQuizSubject(model.state.quizzes[dataQ]);

    // QuizView?.updateProgressBar(model.state.quizzes[dataQ]);

    // Render the first question
    view.renderSpinner();
    setTimeout(
      () => QuizView.renderMarkUpQuiz(model.state.quizzes[dataQ]),
      100
    );
  }
};

const init = function () {
  initialView.renderView();
  displayModeview.handleMode();
  QuizView.handlerGetQuestions(controlSubjectsView);
  nextQuestionView.handleNextQuestion(controlAnswers, controlNextQuestion);
  view.handleResetQuiz(controlResetQuiz);
};
init();
