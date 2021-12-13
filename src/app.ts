import express from 'express';
import cors from 'cors';
import questionRouter from './routers/questionRouter';
import userRouter from './routers/userRouter';

const app = express();

app.use(express.json());
app.use(cors());

app.use(questionRouter);
app.use(userRouter);

export default app;
