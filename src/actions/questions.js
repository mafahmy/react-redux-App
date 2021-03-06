//import { saveQuestion } from '../utils/api';
import { addQuestionToUser } from "./users";
import { showLoading, hideLoading } from "react-redux-loading-bar";
import { _saveQuestion } from "../utils/_DATA";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_ANSWER_TO_QUESTION = "ADD_ANSWER_TO_QUESTION";
export const ADD_QUESTION = "ADD_QUESTION";

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

export function addAnswerToQuestion(authedUser, qid, answer) {
  return {
    type: ADD_ANSWER_TO_QUESTION,
    authedUser,
    qid,
    answer,
  };
}
export function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}
export function handleSaveQuestion(optionOneText, optionTwoText, author) {
  return async (dispatch) => {
    const question_1 = await _saveQuestion({
      optionOneText,
      optionTwoText,
      author,
    });
    dispatch(showLoading());
    dispatch(addQuestion(question_1));
    dispatch(addQuestionToUser(question_1));
    dispatch(hideLoading());
  };
}
