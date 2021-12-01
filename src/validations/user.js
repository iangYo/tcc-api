const Joi = require('joi');

const create = Joi.object().keys({
  email: Joi.string().email().required().messages({
    'string.base': 'Email deve ser do tipo texto',
    'string.email': 'Email deve ser válido',
    'any.required': 'Email é obrigatório'
  }),
  password: Joi.string().min(8).max(16).required().messages({
    'string.base': 'Senha deve ser do tipo texto',
    'any.required': 'Senha é obrigatório',
    'string.min': 'Senha deve ter ao menos 8 caracteres',
    'string.max': 'Senha deve ter no máximo 16 caracteres!'
  })
});

module.exports = { create, login: create };
