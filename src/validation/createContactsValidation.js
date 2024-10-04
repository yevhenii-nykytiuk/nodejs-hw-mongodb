import Joi from "joi";

export const createContactsValidation = Joi.object({
  name: Joi.string().min(3).max(20).required(),
  phoneNumber: Joi.string().pattern(/^[0-9]{10,15}$/).required(),
  email: Joi.string().email().required(),
  isFavourite: Joi.boolean(),
  contactType: Joi.valid('work', 'home', 'personal').required()
});