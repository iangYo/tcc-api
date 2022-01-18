const Joi = require('joi');

const create = Joi.object().keys({
  user: Joi.string().required().messages({
    'string.base': 'Id do usuário deve ser do tipo texto',
    'any.required': 'Id do usuário é obrigatório'
  }),
  mood: Joi.array().items(Joi.string()).required().messages({
    'array.base': 'Humor deve ser um array de strings',
    'any.required': 'Humor é obrigatório'
  }),
  physical_activity: Joi.string().required().messages({
    'string.base': 'Atividade física deve ser do tipo texto',
    'any.required': 'Atividade física é obrigatório'
  }),
  sleep: Joi.string().required().messages({
    'string.base': 'Sono deve ser do tipo texto',
    'any.required': 'Sono é obrigatório'
  }),
  feed: Joi.string().required().messages({
    'string.base': 'Alimentação deve ser do tipo texto',
    'any.required': 'Alimentação é obrigatório'
  }),
  symptoms: Joi.array().items(Joi.string()).required().messages({
    'array.base': 'Sintomas deve ser um array de strings',
    'any.required': 'Sintomas é obrigatório'
  }),
  date: Joi.date().required().messages({
    'date.base': 'Data deve ser do tipo data',
    'any.required': 'Data é obrigatório'
  })
});

const update = Joi.object().keys({
  mood: Joi.array().items(Joi.string()).messages({
    'array.base': 'Humor deve ser um array de strings',
    'any.required': 'Humor é obrigatório'
  }),
  physical_activity: Joi.string().messages({
    'string.base': 'Atividade física deve ser do tipo texto',
    'any.required': 'Atividade física é obrigatório'
  }),
  sleep: Joi.string().messages({
    'string.base': 'Sono deve ser do tipo texto',
    'any.required': 'Sono é obrigatório'
  }),
  feed: Joi.string().messages({
    'string.base': 'Alimentação deve ser do tipo texto',
    'any.required': 'Alimentação é obrigatório'
  }),
  symptoms: Joi.array().items(Joi.string()).messages({
    'array.base': 'Sintomas deve ser um array de strings',
    'any.required': 'Sintomas é obrigatório'
  }),
  date: Joi.date().messages({
    'date.base': 'Data deve ser do tipo data',
    'any.required': 'Data é obrigatório'
  })
});

module.exports = { create, update };
