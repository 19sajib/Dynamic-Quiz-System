const quizReducer = (
    state = { quizs: [], loading: false, error: false,},
    action
) => {
    switch(action.type) {
        case "QUIZ_START" :
            return { ...state, loading: true, error:false}
        case "GET_ALL_QUIZ_SUCCESS":
            return { ...state, quizs: action.data, loading: false, error:false}
        case 'SUBMIT_QUIZ_SUCCESS':
            return { ...state, quizs: state.quizs.map((quiz)=> quiz._id === action.payload._id ? action.payload : quiz), loading: false, error:false}
        case "QUIZ_FAIL":
            return { ...state, loading: false, error: true}
        default:
            return state
    }
}

export default quizReducer