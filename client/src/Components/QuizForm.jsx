import React from 'react'

const QuizForm = ({optionNum, handleOption, removeOption, setOptionNum, quizData, currrentQuestion, handleQuestion}) => {
  return (
    <>
      <div className="mt-5 text-center text-2xl font-bold text-gray-700">
                              <div className="flex flex-col space-y-1">
                                <div className="flex items-center justify-between">
                                <label htmlFor="title" className="text-sm font-semibold text-gray-500">Question</label>
                                </div>
                                <input
                                    type="text"
                                    name="title"
                                    placeholder='Wirte your question here...'
                                    // value={quizData?.questions[currrentQuestion-1]?.title || ''}
                                    onChange={handleQuestion}
                                    className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:border-indigo-600"
                                />
                               </div>
                        </div>
                        <hr className="mx-5 my-5 border-t border-grey-light pt-2" />
    <div className="grid grid-cols-2 divide-x text-center text-2xl text-gray-700">
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
                            
                            {Array.from(Array(optionNum)).map((c, index) => {
                                return <div key={index} className="flex flex-col space-y-1 px-4 py-4">
                                <div className="flex items-center justify-between">
                                <label htmlFor="option" className="text-sm font-semibold text-gray-500">Option {index+1}</label>
                                </div>
                                <input
                                    type="text"
                                    name="option"
                                    placeholder="Wirte your option here..."
                                    // value={quizData?.questions[currrentQuestion-1]?.option[index] || ''}
                                    onChange={(e)=>handleOption({index, e})}
                                    className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:border-indigo-600"
                                />
                                </div>
                            })}
                        <div className="text-center pb-6 mt-6">
                            <button type="button" onClick={(e)=>setOptionNum(optionNum+1)}
                                    className="inline-flex items-center py-2 px-4 ml-3 text-sm font-medium text-gray-500 bg-white rounded-full border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer disabled:opacity-30">
                                    Add Option
                            </button>
                            <button type="button" onClick={removeOption} disabled={optionNum===1}
                                    className="inline-flex items-center py-2 px-4 ml-3 text-sm font-medium text-white bg-red rounded-full border border-white hover:bg-red-100 hover:text-gray-700 dark:bg-red-800 dark:border-red-700 dark:text-white dark:hover:bg-red-700 dark:hover:text-white cursor-pointer disabled:opacity-30">
                                    Remove Option
                            </button>
                        </div>
                        </div>
                        </>
  )
}

export default QuizForm