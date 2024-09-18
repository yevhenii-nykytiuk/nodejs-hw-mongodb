import { model, Schema } from "mongoose";

const contactShema = new Schema({

  name: {
    type: String,
    required: true,
  },

  phoneNumber: {
    type: Number,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  isFavourite: {
    type: Boolean,
    required: true,
    default: false,
  },

  contactType: {
    type: String,
    required: true,
    enum: ['work', 'home', 'personal'],
    default: 'personal',
  }, 

  timestamps: true,
  versionKey: false,

});

export const contactModel = model('contacts', contactShema);