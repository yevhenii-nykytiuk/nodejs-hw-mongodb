import { Router } from "express";
import { getAllContacts, getContactsById } from "../services/contacts";

const router = Router();


router.get('/contacts', async (req, res) => {
  const contacts = await getAllContacts();

  res.status(200).json({
    status: 200,
    message: "Successfully found contacts!",
    data: contacts,
  });
});

router.get('/contacts/:contactId', async (req, res) => {
  const {
    contactId
  } = req.params;

  const contact = await getContactsById(contactId);

  if (contact) {
    res.status(200).json({
      status: 200,
      message: `Successfully found contact with id ${contactId}!`,
      data: contact,
    });
  } else {
    res.status(404).json({
      message: 'Not found contact',
    });
  }
});

export default router;