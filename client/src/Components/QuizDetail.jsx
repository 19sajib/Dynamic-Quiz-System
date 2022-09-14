import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

import { submitQuiz } from '../Actions/QuizAction'

const QuizDetail = ({data}) => {

  const dispatch = useDispatch()
  const {id} = useParams()

  const user = useSelector((state)=> state.authReducer.authData)
  const {loading, error} = useSelector((state)=> state.authReducer)

  const [currrentQuestion, setCurrentQuestion] = useState(1)
  const [quizData, setQuizData] = useState({
    userAnswer: [],
    playerId: user._id,
    playerUsername: user.username
  })

  const saveAnswer = (e) => {
    e.preventDefault()
    let userAnswer = [...quizData.userAnswer]
    userAnswer[currrentQuestion-1] = e.target.value;
    setQuizData((prev)=>{
      return ({...prev, userAnswer})
    })
  }

  // "You can not be everything to everyone, but you can be something to someone." As simple as that!

  const handleSubmit= (e) => {
    e.preventDefault()
    dispatch(submitQuiz(id, quizData))
  }

  return (
    <div>
      <div className="flex flex-wrap ">
        <div className="w-auto flex flex-col p-10 m-auto">
          <div className='bg-white rounded-lg shadow-lg overflow-hidden flex-1 flex flex-col'>
                        <div className="mt-4 text-center text-2xl text-gray-700">Question {currrentQuestion} of {data.questions.length}</div>
                        <div className="mt-10 text-center text-2xl font-bold text-gray-700">
                            <div>{data.questions[currrentQuestion - 1].title }</div>
                        </div>
                        <hr className="mx-5 my-5 border-t border-grey-light pt-2" />
                        <div className="grid grid-cols-2 divide-x text-center text-2xl text-gray-700">
                          {data.questions[currrentQuestion - 1].option.map((option, id) => {
                            return <div key={id}>
                              <div className={`m-5 border rounded border-gray hover:border-transparent hover:text-white hover:bg-green-500 px-4 py-2 ${quizData.userAnswer[currrentQuestion - 1] === option ? 'bg-green-500 text-white' : ''}`}>
                              <button onClick={saveAnswer} value={option}  id="optionA" name="A">
                              {option}
                              </button>
                              </div> </div>
                          })}
                            {/* <div className={`m-5 border rounded border-gray hover:border-transparent hover:text-white hover:bg-green-500 px-4 py-2 ${quizData.userAnswer[currrentQuestion - 1] === data.questions[currrentQuestion - 1].option[0] ? 'bg-green-500 text-white' : ''}`}>
                                <button onClick={saveAnswer} value={data.questions[currrentQuestion - 1].option[0]}  id="optionA" name="A">
                                {data.questions[currrentQuestion - 1].option[0]}
                                </button>
                            </div>
                            <div className="m-5 border rounded border-gray hover:border-transparent hover:text-white hover:bg-green-500 px-4 py-2">
                                <button onClick={saveAnswer} value={data.questions[currrentQuestion - 1].option[1]}  id="optionB" name="B">
                                {data.questions[currrentQuestion - 1].option[1]}
                                </button>
                            </div> */}
                        </div>
                        <div className="text-center pb-6 mt-6">
                            <div>
                              <button onClick={() => {setCurrentQuestion(prev=>prev-1)}} disabled={data.questions[currrentQuestion - 1] === data.questions[0]} className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-500 bg-white rounded-full border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer disabled:opacity-30">
                                Back
                              </button>
                              <button onClick={() => {setCurrentQuestion(prev=>prev+1)}} disabled={!data.questions[currrentQuestion]} className="inline-flex items-center py-2 px-4 ml-3 text-sm font-medium text-gray-500 bg-white rounded-full border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer disabled:opacity-30">
                                Next
                              </button>
                            </div>
                        {!data.questions[currrentQuestion] &&
                         <button onClick={handleSubmit} disabled={data.questions.length !== quizData.userAnswer.length || loading} className="mt-7 transition duration-500 transform hover:translate-y-1 inline-block bg-blue-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer disabled:opacity-40">
                           Submit Quiz 
                           </button>
                         }
                         </div>
                        {error && <div className="text-2xl text-red-700 font-bold mt-5px">{error.message}</div>}
                    </div>
    </div>
    </div>
    </div>
  )
}

export default QuizDetail