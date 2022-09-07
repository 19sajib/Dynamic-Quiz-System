import mongoose from 'mongoose'

const QuizSchema = mongoose.Schema({
    creator: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    quizTitle: {
        type: String,
        require: true
    },
    quizInfo: {
        type: String
    },
    enrolled: [],
    playedBy: [
        {
            playerId: String,
            playerUsername: String,
            timesPlayed: {type: Number, default: 0},
            topScore: {type: Number, default: 0},
        },
    ],
    maxPlay: {
        type: Number,
    },
    freePlay: {
        type: Boolean,
        default: true
    },
    cost:{
        type: Number
    },
    quizTime: {
        type: String
    },
    questionTime: {
        type: String
    },
    questions: [
        { title: String, option: [String]}      
    ],
    answers: [String]

}, { timestamps: true })

const QuizModel = mongoose.model('Quiz', QuizSchema)

export default QuizModel