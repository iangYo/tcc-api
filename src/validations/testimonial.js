const Joi = require('joi');

const create = Joi.object().keys({
  user: Joi.string().required().messages({
    'string.base': 'Id do usuário deve ser do tipo texto',
    'any.required': 'Id do usuário é obrigatório'
  }),
  title: Joi.string().required().messages({
    'string.base': 'Título deve ser do tipo texto',
    'any.required': 'Título é obrigatório'
  }),
  text: Joi.string().required().messages({
    'string.base': 'Texto deve ser do tipo texto',
    'any.required': 'Texto é obrigatório'
  })
});

module.exports = { create, login: create };
