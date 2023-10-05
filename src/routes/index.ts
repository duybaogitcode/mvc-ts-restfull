import express from 'express';
import authRoute from './api/authApi';

export function route(app: express.Express) {
  app.use('/auth', authRoute);
}
