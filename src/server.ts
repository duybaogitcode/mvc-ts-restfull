import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { errorHandler } from './libs/handlers/errorsHandlers';
import { route } from './routes';

const app = express();

app.use(
  cors({
    origin: '*',
    credentials: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  })
);
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(errorHandler);

route(app);

export default app;
