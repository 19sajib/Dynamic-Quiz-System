import QuizModel from '../Models/Quiz.js'


// Creating Quiz

export const createQuiz = async (req, res) => {

    const newQuiz = new QuizModel(req.body)
    try {
        const quiz = await newQuiz.save()
        res.status(201).json({quiz})
    } catch(error) {
        res.status(500).json({message: error.message})
    }
}

// Submit Quiz

export const submitQuiz = async (req, res) => {
        const { userAnswer, playerId, playerUsername } = req.body;
        const quizId = req.params.id;
    try {
        const quiz = await QuizModel.findById(quizId);
        if(!quiz) return res.status(404).json({message: 'No Such Quiz...'})
        let realAnswer = quiz.answers;
        let score = 0;
        for(let i = 0; i < realAnswer.length; i++){
            if(userAnswer[i] === realAnswer[i]) score ++;
        }
        let played = quiz.playedBy

        const quizTaker = quiz.playedBy.filter(player => player.playerId === playerId);
        if(quizTaker[0]) {
            if (quizTaker[0].topScore < score) quizTaker[0].topScore = score;
            quizTaker[0].timesPlayed = quizTaker[0].timesPlayed + 1;
        } else {
            let newQuizTaker = {
                playerId: playerId,
                playerUsername: playerUsername,
                timesPlayed: 1,
                topScore: score,
            }
            played.push(newQuizTaker);
        }

        await quiz.save()

        res.status(200).json({quiz})

    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

// Get All Quiz

export const allQuiz = async (req, res) => {
    try {
        const quiz = await QuizModel.find()
        res.status(200).json({quiz})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}