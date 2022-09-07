import express from 'express';

import { createQuiz, submitQuiz, allQuiz } from '../Controllers/QuizController.js'

const router = express.Router();

router.post('/create', createQuiz)
router.put('/submit/:id', submitQuiz)
router.get('/all', allQuiz)

export default router;