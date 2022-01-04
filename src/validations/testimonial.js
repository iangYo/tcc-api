const Joi = require('joi');

const create = Joi.object().keys({
  user: Joi.string().required().messages({
    'string.base': 'Id do usuário deve ser do tipo texto',
    'any.required': 'Id do usuário é obrigatório'
  }),
  title: Joi.string().required().messages({
    'string.base': 'Email deve ser do tipo texto',
    'any.required': 'Email é obrigatório'
  }),
  text: Joi.string().required().messages({
    'string.base': 'Senha deve ser do tipo texto',
    'any.required': 'Senha é obrigatório'
  })
});

module.exports = { create, login: create };
