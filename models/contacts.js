const {Contact, addSchema, updateFavoriteSchema} = require ('../models/contacts')
const { HttpError }= require('../helpers')
const ctrlWrapper = require('../helpers/ctrlWrapper')
const listContacts = async (req, res, next) => {
  const result = await Contact.find()
  res.json(result)
  console.log(result)
}

const getById = async (req, res, next) => {
  const { id } = req.params
  const result = await Contact.findById(id)

  if (!result) {
    throw HttpError(404, 'notFound')
  }
  res.json(result)
}