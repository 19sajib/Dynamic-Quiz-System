import React from 'react'
import QuizDetail from '../Components/QuizDetail'

import { useSelector } from 'react-redux'
import { useParams } from 'react-router'

const Quiz = () => {
    const { id } = useParams()
    const data = useSelector((state)=> state.quizReducer.quizs.quiz.filter((quiz)=> quiz._id ===id)[0])
    console.log(data);
  return (
    <div>
        <QuizDetail data={data} id={id} />
    </div>
  )
}

export default Quiz