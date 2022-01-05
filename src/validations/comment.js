const Joi = require('joi');

const create = Joi.object().keys({
  user: Joi.string().required().messages({
    'string.base': 'Id do usuário deve ser do tipo texto',
    'any.required': 'Id do usuário é obrigatório'
  }),
  testimonial: Joi.string().required().messages({
    'string.base': 'Relato de vivência deve ser do tipo texto',
    'any.required': 'Relato de vivência é obrigatório'
  }),
  comment: Joi.string().required().messages({
    'string.base': 'Comentário deve ser do tipo texto',
    'any.required': 'Comentário é obrigatório'
  })
});

module.exports = { create, login: create };
