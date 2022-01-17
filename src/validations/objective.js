const Joi = require('joi');

const create = Joi.object().keys({
  user: Joi.string().required().messages({
    'string.base': 'Id do usuário deve ser do tipo texto',
    'any.required': 'Id do usuário é obrigatório'
  }),
  start_date: Joi.date().required().messages({
    'date.base': 'Data de início deve ser do tipo data',
    'any.required': 'Data de início é obrigatório'
  }),
  end_date: Joi.date().required().messages({
    'date.base': 'Data final deve ser do tipo data',
    'any.required': 'Data final é obrigatório'
  }),
  reason: Joi.string().messages({
    'string.base': 'Motivo deve ser do tipo texto',
    'any.required': 'Motivo é obrigatório'
  })
});

const update = Joi.object().keys({
  start_date: Joi.date().messages({
    'date.base': 'Data de início deve ser do tipo data',
    'any.required': 'Data de início é obrigatório'
  }),
  end_date: Joi.date().messages({
    'date.base': 'Data final deve ser do tipo data',
    'any.required': 'Data final é obrigatório'
  }),
  reason: Joi.string().messages({
    'string.base': 'Motivo deve ser do tipo texto',
    'any.required': 'Motivo é obrigatório'
  })
});

module.exports = { create, update };
