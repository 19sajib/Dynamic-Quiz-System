import React from 'react'
import moment from 'moment'
import { useSelector } from 'react-redux' 
import { useParams } from 'react-router-dom'

const QuizSummary = () => {

    const  user  = useSelector((state)=> state.authReducer.authData)
    let { quizs } = useSelector((state) => state.quizReducer)
    const {id} = useParams()

    const quiz = quizs.quiz.filter((data)=> data._id===id)[0]
    const tData = quiz.playedBy.sort((a,b)=>b.topScore-a.topScore)
    
  return (
    <div>
        <div className="w-full h-screen overflow-x-hidden border-t flex flex-col">
            <div className="w-full flex-grow p-6">
                <h1 className="text-3xl text-center font-bold text-purple-900 pb-6">Quiz Summary</h1>
                <h1 className="text-3xl font-bold text-gray-500 pb-6">Quiz Title : {quiz.quizTitle}</h1>
                <div className="w-full flex">
                <h2 className="w-1/3 text-2xl font-bold text-gray-400 pb-6">Quiz Question : {quiz.questions.length}</h2>
                <h2 className="w-1/3 text-2xl font-bold text-gray-400 pb-6">Max Play : {quiz.maxPlay}</h2>
                <h2 className="w-1/3 text-2xl font-bold text-gray-400 pb-6">Time : {moment(quiz.quizTime, "m").format("m:ss")}</h2>
                </div>

                <div className="w-full mt-6">
                    <p className="text-xl text-gray-600 pb-3 flex items-center">
                        <i className="fas fa-list mr-3">Leaderboard</i> 
                    </p>
                    <div className="bg-white overflow-auto">
                        <table className="min-w-full bg-white">
                            <thead className="bg-gray-800 text-white">
                                <tr>
                                    <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">User Name</th>
                                    <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">score</th>
                                    <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Attepmts</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-700">
                               { tData.map((data,id) => { 
                                return <tr key={id} className={`${data.playerId === user._id ? 'bg-gray-300' : ''}`}>
                                    <td className="text-left py-3 px-4 hover:text-blue-500">{data.playerUsername}</td>
                                    <td className="w-1/3 text-left py-3 px-4">{data.topScore}</td>
                                    <td className="w-1/3 text-left py-3 px-4">{data.timesPlayed}</td>
                                </tr>
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
                </div>
    </div>
    </div>
  )
}

export default QuizSummary