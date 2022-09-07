import * as QuizAPI from '../Api/QuizRequest'

export const getAllQuiz = id => async (dispatch) => {
    dispatch({type: "GET_ALL_QUIZ_START"})
    try {
        const { data } = await QuizAPI.getAllQuiz(id)
        dispatch({type: "GET_ALL_QUIZ_SUCCESS", data: data})
    } catch (error) {
        dispatch({type: "GET_ALL_QUIZ_FAIL"})
    }
}