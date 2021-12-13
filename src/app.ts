import express from 'express';
import cors from 'cors';
import * as questionController from './controllers/questionController';
import * as userController from './controllers/userController';
import * as answerController from './controllers/answerController';

const app = express();

app.use(express.json());
app.use(cors());

app.post('/questions', questionController.postQuestion);
app.get('/questions', questionController.getQuestions);

app.get('/questions/:id', questionController.getQuestionById);
app.post('/questions/:id', answerController.postAnswer);

app.post('/users', userController.registerUser);
app.get('/ranking', userController.getRanking);

app.post('/questions/:id/up-vote', questionController.postUpvote);
app.post('/questions/:id/down-vote', questionController.postDownvote);

export default app;
