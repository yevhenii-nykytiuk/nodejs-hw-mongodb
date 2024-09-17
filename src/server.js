import express from 'express';
import pino from 'pino-http';
import cors from 'cors';
import { env } from '../src/utils/env.js';
import { ENV_VARS } from './constants/index.js';


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

  app.use('*', (req, res, next) => {
    console.log("Second middleware");
    next();
  });

  // app.use('*', (req, res, next) => {
  //   res.status(404).json({
  //     message: "Not found"
  //   });
  // });

  // app.use((err, req, res, next) => {
  //   res.status(500).json({
  //     message: 'Something went wrong',
  //     error: err.message
  //   });
  // });

  app.get('/', (req, res) => {
    res.json({
      message: "Hello world"
    });
  });

  app.listen(PORT, () => {
    console.log(`Server ${PORT}`);
  });
};

