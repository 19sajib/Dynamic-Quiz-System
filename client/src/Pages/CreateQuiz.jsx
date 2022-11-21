import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import QuizForm from '../Components/QuizForm'


const CreateQuiz = () => {


  const dispatch = useDispatch()
  const navigate = useNavigate()

  const user = useSelector((state)=> state.authReducer.authData)
  const {quiz} = useSelector((state)=>state.quizReducer?.quizs)
  console.log(quiz);
  const {loading, error} = useSelector((state)=> state.authReducer)

  const [optionNum, setOptionNum] = useState(1)
  const [currrentQuestion, setCurrentQuestion] = useState(1)
  const [numberOfQuestion, setNumberOfQuestion] = useState(1)
  const [question, setQuestion] = useState({})
  const [option, setOption] = useState([])
  const [quizData, setQuizData] = useState({
    playerId: user._id,
    playerUsername: user.username,
    quizTime: {
        hrs: 0, 
        mins: 0, 
        secs: 0,
    },
    questions: [],
    answers: []
  })

  const handleChange = (e) => {
    setQuizData({...quizData, [e.target.name] : e.target.value})
    console.log(quizData);
  }

  const handleQuestion = (e) => {
    setQuestion({...question, [e.target.name] : e.target.value})
    setQuizData(prev => ({...prev, questions: { [currrentQuestion -1] : question }}))
    console.log(quizData);
  }

  const handleOption = ({e, index}) => {
    console.log(index);
    setOption(prev => ({...prev, [index]: e.target.value}))
    setQuestion(prev => ({...prev, option}))
    setQuizData(prev => ({...prev, questions: { [currrentQuestion -1] : question }}))
    console.log(quizData);
  }

  const removeOption = (e) => {
    e.preventDefault()
    let copyOption = [option]
    copyOption.pop()
    setOption(copyOption)
    setOptionNum(optionNum-1)
    setQuestion(prev => ({...prev, option}))
    setQuizData(prev => ({...prev, questions: {...quizData.questions, [currrentQuestion -1] : question }}))
    console.log(quizData);
  }

  const addAnswer = (e) => {
    e.preventDefault()
    setQuizData(prev => ({...prev, answers: {...quizData.answers, [currrentQuestion-1]: e.target.value}}))
    console.log(quizData);
  }

  const newQuestion = (e) => {
    e.preventDefault()
    setCurrentQuestion(prev=>prev+1)
    setQuestion({})
    setOption([])
  }

  // "You can not be everything to everyone, but you can be something to someone." As simple as that!

  const handleSubmit= (e) => {
    e.preventDefault()

    //dispatch(submitQuiz(id, quizData))
    //navigate(`/quiz/${id}/summary`)
  }

  const questions = [
    "Runtime Enviornment",
    "JS Framework",
    "JS Library",
    "Web Server"]

  return (
    <div>
                <div className="text-center mt-24">
            <div className="flex items-center justify-center">
                <svg fill="none" viewBox="0 0 24 24" className="w-12 h-12 text-blue-500" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                </svg>
            </div>
            <h2 className="text-4xl tracking-tight">
                Create A Quiz
            </h2>
                {/* </div>

                <div className="flex min-h-screen items-center justify-center bg-gray-100 font-sans">
                <label for="dropzone-file" className="mx-auto cursor-pointer flex w-full max-w-lg flex-col items-center rounded-xl border-2 border-dashed border-blue-400 bg-white p-6 text-center" />
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>

                    <h2 className="mt-4 text-xl font-medium text-gray-700 tracking-wide">Payment File</h2>

                    <p className="mt-2 text-gray-500 tracking-wide">Upload or darg & drop your file SVG, PNG, JPG or GIF. </p>

                    <input id="dropzone-file" type="file" className="hidden" /> */}
            </div>
            
      <div className="flex flex-wrap ">
        <div className="w-auto flex flex-col p-10 m-auto">
          <div className='p-10 bg-white rounded-lg shadow-lg overflow-hidden flex-1 flex flex-col'>
          <div className="mb-4 text-center text-3xl font-bold text-green-700">Create Quiz</div>

                            <div className="flex flex-col space-y-1">
                                <div className="flex items-center justify-between">
                                <label htmlFor="quizTitle" className="text-sm font-semibold text-gray-500">Quiz Title</label>
                                </div>
                                <input
                                    type="text"
                                    name="quizTitle"
                                    autoFocus
                                    placeholder='Quiz Title'
                                    value={quizData.quizTitle}
                                    onChange={handleChange}
                                    className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:border-indigo-600"
                                />
                            </div>
                            <div className="flex flex-col space-y-1">
                                <div className="flex items-center justify-between">
                                <label htmlFor="quizNumber" className="text-sm font-semibold text-gray-500">Number Of Question</label>
                                </div>
                                <input
                                    type="number"
                                    name="quizNumber"
                                    label="Number Of Question"
                                    value={numberOfQuestion}
                                    onChange={(e)=>setNumberOfQuestion(e.target.value)}
                                    className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:border-indigo-600"
                                />
                            </div>

                            <div className="flex flex-col space-y-1">
                                 <div className="flex items-center justify-between">
                                <label htmlFor="quizType" className="text-sm font-semibold text-gray-500">Quiz Type</label>
                                </div>
                                <select onChange={handleChange} name="freePlay" className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:border-indigo-600">
                                    <option></option>
                                    <option value="true">Free Quiz</option>
                                    <option value="false">Paid Quiz</option>
                                </select>
                            </div>

                            { quizData?.freePlay === "true" && <div className="flex flex-col space-y-1">
                                <div className="flex items-center justify-between">
                                <label htmlFor="maxPlay" className="text-sm font-semibold text-gray-500">Max Number Of Free Play?</label>
                                </div>
                                <input
                                    type="number"
                                    name="maxPlay"
                                    label="Max Free Play"
                                    value={quizData.maxPlay}
                                    onChange={handleChange}
                                    className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:border-indigo-600"
                                />
                            </div> }
                            
                            { quizData?.freePlay === "false" && <div className="flex flex-col space-y-1">
                                    <div className="flex items-center justify-between">
                                    <label htmlFor="cost" className="text-sm font-semibold text-gray-500">Quiz Cost?</label>
                                    </div>
                                    <input
                                        type="number"
                                        name="cost"
                                        label="Max Free Play"
                                        value={quizData.cost}
                                        onChange={handleChange}
                                        className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:border-indigo-600"
                                    />
                                    </div>
                            }

                            <div className="flex flex-col space-y-1">
                                 <div className="flex items-center justify-between">
                                <label htmlFor="fullTime" className="text-sm font-semibold text-gray-500">Quiz Time Type</label>
                                </div>
                                <select onChange={(e)=> setQuizData({...quizData, quizTime : {...quizData.quizTime, [e.target.name]: e.target.value}})} name="fullTime" className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:border-indigo-600">
                                    <option></option>
                                    <option value="false">Time Per Question</option>
                                    <option value="true">Time For Full Quiz</option>
                                </select>
                            </div>


                        
                        {numberOfQuestion && <div className="mt-4 text-center text-2xl text-gray-700">Quiz {currrentQuestion} of {numberOfQuestion}</div>}
                        
                        {numberOfQuestion && Array.from(Array(numberOfQuestion)).map((c, index)=> {
                          return  <QuizForm key={index} optionNum={optionNum} handleOption={handleOption} removeOption={removeOption} setOptionNum={setOptionNum} quizData={quizData} currrentQuestion={currrentQuestion} handleQuestion={handleQuestion} />
                        })}

                        <hr className="mx-5 border-t border-grey-light pt-2" />
                        <div className="mt-5 text-center text-2xl font-bold text-gray-700">
                              <div className="flex flex-col space-y-1">
                                <div className="flex items-center justify-between">
                                <label htmlFor="answers" className="text-sm font-semibold text-gray-500">Quiz Answer</label>
                                </div>
                                <input
                                    type="text"
                                    name="answers"
                                    placeholder='Wirte your answer here...'
                                    value={quizData?.answers[currrentQuestion-1]}
                                    onChange={addAnswer}
                                    className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:border-indigo-600"
                                />
                               </div>
                        </div>

                        <div className="text-center pb-6 mt-6">
                            <div>
                              <button onClick={() => {setCurrentQuestion(prev=>prev-1)}} disabled={questions[currrentQuestion - 1] === questions[0]} className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-500 bg-white rounded-full border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer disabled:opacity-30">
                                Back
                              </button>
                              <button onClick={newQuestion} disabled={!questions[currrentQuestion]} className="inline-flex items-center py-2 px-4 ml-3 text-sm font-medium text-gray-500 bg-white rounded-full border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer disabled:opacity-30">
                                Next
                              </button>
                            </div>
                         <button onClick={handleSubmit} className="mt-7 transition duration-500 transform hover:translate-y-1 inline-block bg-blue-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer disabled:opacity-40">
                           Create Quiz 
                           </button>
                         </div>
                        {error && <div className="text-2xl text-red-700 font-bold mt-5px">{error.message}</div>}
                    </div>
    </div>
    </div>
    </div>
  )
}

export default CreateQuiz