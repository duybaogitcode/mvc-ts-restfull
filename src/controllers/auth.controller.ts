import { NextFunction, Request, Response } from 'express';
import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import authServices from '../services/auth.services';
import { sendSuccessResponse } from '../constants/successResponse';

const authController = {
  registerUser: async (req: Request, res: Response) => {
    try {
      const salt = crypto.randomBytes(16).toString('hex');
      const hashed = crypto
        .createHash('sha256')
        .update(req.body.password + salt)
        .digest('hex');
      const id = crypto
        .createHash('sha256')
        .update(req.body.email + salt)
        .digest('hex');

      res.status(200).json({ id, hashed });
      // ...
    } catch (error) {
      console.log(error);
    }
  },
  login: async (req: Request, res: Response, next: NextFunction) => {
    const { name } = req.body;

    try {
      const user = await authServices.login();
      console.log(user);
      return sendSuccessResponse(res, user);
    } catch (error) {
      next(error);
    }
  },
};

export default authController;
