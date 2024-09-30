import { Router } from "express";
import {
  getContactsController,
  getContactByIdController,
  createContactController,
  updateContactController,
  deleteContactByIdController
} from "../controllers/contacts.js";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";
import { isValidId } from "../middlewares/isValidId.js";
import { validateBody } from "../middlewares/validateBody.js";
import { createContactsValidation } from "../validation/createContactsValidation.js";
import { updateContactsValidation } from "../validation/updateContactsValidation.js";

const router = Router();

router.use('/contacts/:contactId', isValidId('contactId'));

router.get('/contacts', ctrlWrapper(getContactsController));

router.get('/contacts/:contactId', ctrlWrapper(getContactByIdController));

router.post('/contacts',
  validateBody(createContactsValidation),
  ctrlWrapper(createContactController),
);

router.patch('/contacts/:contactId',
  validateBody(updateContactsValidation),
  ctrlWrapper(updateContactController)
);

router.delete('/contacts/:contactId', ctrlWrapper(deleteContactByIdController));

export default router;