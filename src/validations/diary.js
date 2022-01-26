const Joi = require('joi');

const create = Joi.object().keys({
  user: Joi.string().messages({
    'string.base': 'Id do usuário deve ser do tipo texto'
  }),
  mood: Joi.array().items(Joi.string()).messages({
    'array.base': 'Humor deve ser um array de strings'
  }),
  physical_activity: Joi.string().messages({
    'string.base': 'Atividade física deve ser do tipo texto'
  }),
  sleep: Joi.string().messages({
    'string.base': 'Sono deve ser do tipo texto'
  }),
  feed: Joi.string().messages({
    'string.base': 'Alimentação deve ser do tipo texto'
  }),
  symptoms: Joi.array().items(Joi.string()).messages({
    'array.base': 'Sintomas deve ser um array de strings'
  }),
  date: Joi.date().messages({
    'date.base': 'Data deve ser do tipo data'
  }),
  obs: Joi.string().messages({
    'string.base': 'Observações deve ser do tipo texto'
  })
});

const update = Joi.object().keys({
  mood: Joi.array().items(Joi.string()).messages({
    'array.base': 'Humor deve ser um array de strings'
  }),
  physical_activity: Joi.string().messages({
    'string.base': 'Atividade física deve ser do tipo texto'
  }),
  sleep: Joi.string().messages({
    'string.base': 'Sono deve ser do tipo texto'
  }),
  feed: Joi.string().messages({
    'string.base': 'Alimentação deve ser do tipo texto'
  }),
  symptoms: Joi.array().items(Joi.string()).messages({
    'array.base': 'Sintomas deve ser um array de strings'
  }),
  date: Joi.date().messages({
    'date.base': 'Data deve ser do tipo data'
  }),
  observations: Joi.string().messages({
    'string.base': 'Observações deve ser do tipo texto'
  })
});

module.exports = { create, update };
