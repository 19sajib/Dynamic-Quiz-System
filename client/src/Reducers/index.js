import { combineReducers } from 'redux'

import authReducer from './AuthReducer'
import quizReducer from './QuizReducer'

export const reducers = combineReducers({authReducer, quizReducer})

