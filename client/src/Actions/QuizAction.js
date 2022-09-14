import * as QuizAPI from '../Api/QuizRequest'

export const getAllQuiz = id => async (dispatch) => {
    dispatch({type: "QUIZ_START"})
    try {
        const { data } = await QuizAPI.getAllQuiz(id)
        dispatch({type: "GET_ALL_QUIZ_SUCCESS", data: data})
    } catch (error) {
        dispatch({type: "QUIZ_FAIL"})
    }
}

export const submitQuiz = (id, quizData) => async (dispatch) => {
    dispatch({ type: 'QUIZ_START'})
    try {
        const { data } = await QuizAPI.submitQuiz(id, quizData)
        dispatch({ type: 'SUBMIT_QUIZ_SUCCESS', data:data})
    } catch (error) {
        dispatch({ type: 'QUIZ_FAIL'})
    }
}