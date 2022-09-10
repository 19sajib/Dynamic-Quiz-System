import React, { useState } from 'react'

const QuizDetail = ({data}) => {
  const [currrentQuestion, setCurrentQuestion] = useState(1)

  const saveAnswer = () => {
    console.log('Working');
  }
  // "You can not be everything to everyone, but you can be something to someone." As simple as that!

  const handleQuestionChange = () => {

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
                            <div className="m-5 border rounded border-gray hover:border-transparent hover:text-white hover:bg-green-500 px-4 py-2">
                                <button className='btn-answers'  id="optionA" name="A">
                                {data.questions[currrentQuestion - 1].option[0]}
                                </button>
                            </div>
                            <div className="m-5 border rounded border-gray hover:border-transparent hover:text-white hover:bg-green-500 px-4 py-2">
                                <button className='btn-answers'  id="optionB" name="B">
                                {data.questions[currrentQuestion - 1].option[1]}
                                </button>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 divide-x text-center text-2xl text-gray-700">
                            <div className="m-5 border rounded border-gray hover:border-transparent hover:text-white hover:bg-green-500 px-4 py-2">
                                <button className='btn-answers'  id="optionC" name="C">
                                {data.questions[currrentQuestion - 1].option[2]}
                                </button>
                            </div>
                            <div className="m-5 border rounded border-gray hover:border-transparent hover:text-white hover:bg-green-500 px-4 py-2">
                                <button className='btn-answers'  id="optionD" name="D">
                                {data.questions[currrentQuestion - 1].option[3]}
                                </button>
                            </div>
                        </div>
                        <div className="text-center pb-6 mt-6">
                        {data.questions[currrentQuestion] ? 
                            <div>
                              <p onClick={() => {setCurrentQuestion(prev=>prev-1)}} className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer">
                                Previous
                              </p>
                              <p onClick={() => {setCurrentQuestion(prev=>prev+1)}} className="inline-flex items-center py-2 px-4 ml-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer">
                                Next
                              </p>
                            </div>
                        : <span onClick={saveAnswer} className="transition duration-500 transform hover:translate-y-1 inline-block bg-blue-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">
                           Submit Quiz </span>
                         }
                         </div>
                        <form></form>
                        {/* {this.state.loading && <div className="loading"></div>} */}
                    </div>
    </div>
    </div>
    </div>
  )
}

export default QuizDetail