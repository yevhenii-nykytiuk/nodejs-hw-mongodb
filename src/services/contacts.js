import HttpError from "http-errors";
import { contactModel } from "../db/models/contacts.js";


export const getAllContacts = async () => {
  return await contactModel.find();
};

export const getContactsById = async (contactId) => {
  const contact = await contactModel.findById(contactId);

  if (!contact) {
    throw HttpError(404, "Contact not found");
  }
  return contact;
};

export const createContact = async (payload) => {
  return await contactModel.create(payload);
};

export const updateContact = async (contactId, payload) => {
  const contact = await contactModel.findByIdAndUpdate(contactId, payload, {
    new: true
  });
  
  if (!contact) {
    throw HttpError(404, "Contact not found");
  } 
  return contact;
};

export const deleteContactById = async (contactId) => {
  const contact = contactModel.findByIdAndDelete(contactId);

  if (!contact) {
    throw HttpError(404, "Contact not found");
  }

  return contact;
};

