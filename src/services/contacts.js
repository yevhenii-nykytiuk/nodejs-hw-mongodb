import { contactModel } from "../db/models/contacts.js";
import { calculatePaginationData } from "../utils/calculatePaginationData.js";


export const getAllContacts = async ({ page, perPage}) => {

  const limit = perPage;
  const skip = (page - 1) / perPage;

  const contactsQuery = contactModel.find();
  const contactsCount = await contactModel.find().merge(contactsQuery).countDocuments();

  const contacts = await contactsQuery.skip(skip).limit(limit).exec();

  const paginationData = calculatePaginationData(contactsCount, perPage, page);

  console.log('studentsCount:', contactsCount);
  console.log('perPage:', perPage);
  console.log('page:', page);

  return {
    data: contacts,
    ...paginationData
  };
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

