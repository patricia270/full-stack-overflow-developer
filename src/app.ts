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

app.post('/questions/:id', answerController.postAnswer);

app.post('/users', userController.registerUser);

export default app;
