import HttpError from "http-errors";
import { getAllContacts, getContactsById } from "../services/contacts.js";




export const getContactsController = async (req, res) => {
  const contacts = await getAllContacts();

  res.status(200).json({
    status: 200,
    message: "Successfully found contacts!",
    data: contacts,
  });
};

export const getContactByIdController = async (req, res) => {

  const { contactId } = req.params;

  const contact = await getContactsById(contactId);

  if (!contact) {
    throw HttpError(404, "Contact not found");
  }
    res.status(200).json({
      status: 200,
      message: `Successfully found contact with id ${contactId}!`,
      data: contact,
  });
};