const { Schema, model } = require('mongoose'); // Підключення модулів Schema та model з mongoose
const Joi = require('joi'); // Підключення модуля Joi для валідації даних
const { handleMongooseError } = require('../helpers'); // Підключення функції handleMongooseError з папки '../helpers'

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Set name for contact'], // Властивість name має тип String та обов'язкова для заповнення. Якщо значення не вказане, генерується помилка з повідомленням "Set name for contact"
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false }, 
);

contactSchema.post('save', handleMongooseError); 

const Contact = model('contact', contactSchema); 

const addSchema = Joi.object({
  name: Joi.string().required(), 
  email: Joi.string().required(), 
  phone: Joi.string().required(), 
});

const updateFavoriteSchema = Joi.object({
  favorite: Joi.boolean().required(), 
});

module.exports = { Contact, addSchema, updateFavoriteSchema }; 