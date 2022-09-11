import express from 'express';

import { createQuiz, submitQuiz, allQuiz } from '../Controllers/QuizController.js'
import { verifyToken, verifyTokenAndAdmin } from '../Middleware/verifyToken.js'

const router = express.Router();

router.post('/create', verifyTokenAndAdmin, createQuiz)
router.put('/submit/:id', verifyToken, submitQuiz)
router.get('/all', verifyToken, allQuiz)

export default router;