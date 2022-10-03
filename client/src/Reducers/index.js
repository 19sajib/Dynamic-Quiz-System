import { combineReducers } from 'redux'

import authReducer from './AuthReducer'
import quizReducer from './QuizReducer'
import userReducer from './UserReducer'

export const reducers = combineReducers({authReducer, quizReducer, userReducer})

