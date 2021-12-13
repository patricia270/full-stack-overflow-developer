import { Router } from 'express';
import * as questionController from '../controllers/questionController';
import * as answerController from '../controllers/answerController';

const router = Router();

router.post('/questions', questionController.postQuestion);
router.get('/questions', questionController.getQuestions);

router.get('/questions/:id', questionController.getQuestionById);
router.post('/questions/:id', answerController.postAnswer);

router.put('/questions/:id/up-vote', questionController.postUpvote);
router.put('/questions/:id/down-vote', questionController.postDownvote);

export default router;
