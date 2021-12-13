import { Router } from 'express';
import * as userController from '../controllers/userController';

const router = Router();

router.post('/users', userController.registerUser);
router.get('/ranking', userController.getRanking);

export default router;
