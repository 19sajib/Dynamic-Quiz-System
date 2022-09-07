import React from 'react'
import { useDispatch, useSelector } from 'react-redux' 

import Quiz from './Quiz'
import { getAllQuiz } from '../Actions/QuizAction'

const Quizs = () => {
    const dispatch = useDispatch();
    const  user  = useSelector((state)=> state.authReducer.authData)
    let { quizs, loading } = useSelector((state) => state.quizReducer)
    console.log(user);

    React.useEffect(() => {
        dispatch(getAllQuiz(user._id))
    },[])
  return (
    <div className="flex flex-col gap-1">
        {loading ? "Retreiving Quizs..."
         : quizs.quiz.map((quiz, id) => {
          return <Quiz data={quiz} id={id} />
        })}
    </div>
  )
}

export default Quizs