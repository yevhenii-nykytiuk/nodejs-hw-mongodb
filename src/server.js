import express from 'express';
import pino from 'pino-http';
import cors from 'cors';
import { env } from '../src/utils/env.js';
import { ENV_VARS } from './constants/index.js';
import { getAllContacts, getContactsById } from './services/contacts.js';


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

  app.get('/contacts', async (req, res) => {
    const contacts = await getAllContacts();

    res.status(200).json({
      contacts
    });
  });

  app.get('/contacts/:contactId', async (req, res) => {
    const { contactId } = req.params;

    const contact = await getContactsById(contactId);

    res.status(200).json({
      contact,
    });
  });

  app.use('*', (req, res, next) => {
    console.log("Second middleware");
    next();
  });

  app.use('*', (req, res, next) => {
    res.status(404).json({
      message: "Not found"
    });
  });

  app.use((err, req, res, next) => {
    res.status(500).json({
      message: 'Something went wrong',
      error: err.message
    });
  });

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

