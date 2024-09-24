import express from 'express';
import pino from 'pino-http';
import cors from 'cors';
import { env } from '../src/utils/env.js';
import { ENV_VARS } from './constants/index.js';
import router from './routers/contacts.js';
import { errorHandlerMiddleware } from '../src/middlewares/errorHandler.js';
import { notFoundHandlerMiddleware } from '../src/middlewares/notFoundHandler.js';


const PORT = env(ENV_VARS.PORT, 3000);

export const startServer = () => {

  const app = express();

  app.use(express.json());
  
  app.use(
    pino({
      transport: {
        target: 'pino-pretty'
      },
    }),
  );

  app.use(cors());

  app.use(router);

  app.use(notFoundHandlerMiddleware);

  app.use(errorHandlerMiddleware);


  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

