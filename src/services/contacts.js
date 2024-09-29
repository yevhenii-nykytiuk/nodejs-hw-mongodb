import { contactModel } from "../db/models/contacts.js";


export const getAllContacts = async () => {
  return await contactModel.find();
};

export const getContactsById = async (contactId) => {
  return await contactModel.findById(contactId);
};

export const createContact = async (payload) => {
  return await contactModel.create(payload);
};

export const updateContact = async (contactId, payload) => {
  const contact = await contactModel.findByIdAndUpdate(contactId, payload, {
    new: true
  });
  
  return contact;
};

export const deleteContactById = async (contactId) => {
  return contactModel.findByIdAndDelete(contactId);
};

