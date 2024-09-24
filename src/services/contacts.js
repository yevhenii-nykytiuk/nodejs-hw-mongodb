import { contactModel } from "../db/models/contacts.js";


export const getAllContacts = async () => {
   return await contactModel.find();
};

export const getContactsById = async (contactId) => {
  return await contactModel.findById(contactId);
};