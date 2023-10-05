import express, { Request, Response, Application } from 'express';
import authController from '../../controllers/auth.controller';

const router = express.Router();
router.post('/signup', authController.registerUser);
router.get('/login', authController.login);

export default router;
